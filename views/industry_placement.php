<?php
session_start();
require_once "../includes/header.php";
require_once "../config/db.php"; // DB connection

// ---------------------------------------
// CHECK IF USER LOGGED IN
// ---------------------------------------
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit;
}

// ---------------------------------------
// GET STUDENT ID FROM SESSION
// ---------------------------------------
$user_id = $_SESSION['user_id'];

// ---------------------------------------
// FETCH STUDENT AND USER DATA FOR AUTO-FILL
// Also get students.id for industry_placements query
// ---------------------------------------
$stmt = $pdo->prepare("
    SELECT s.id as student_table_id, s.first_name, s.last_name, s.cb_number, s.degree, u.email 
    FROM students s 
    INNER JOIN users u ON s.user_id = u.id 
    WHERE s.user_id = ?
");
$stmt->execute([$user_id]);
$student_data = $stmt->fetch(PDO::FETCH_ASSOC);

// Get the actual students.id (not users.id) for industry_placements query
$student_table_id = $student_data ? $student_data['student_table_id'] : null;

// Prepare auto-fill values
$full_name = $student_data ? trim($student_data['first_name'] . ' ' . $student_data['last_name']) : '';
$student_id_number = $student_data ? $student_data['cb_number'] : '';
$email = $student_data ? $student_data['email'] : '';
$degree = $student_data ? $student_data['degree'] : '';

// Award title is the same as the degree from student registration
$award_title = $degree;

// ---------------------------------------
// CHECK IF STUDENT ALREADY SUBMITTED (PDO)
// Use students.id (not users.id) for the query
// ---------------------------------------
$submitted_data = null;
if ($student_table_id) {
    $stmt = $pdo->prepare("SELECT * FROM industry_placements WHERE student_id = ?");
    $stmt->execute([$student_table_id]);
    $submitted_data = $stmt->fetch(PDO::FETCH_ASSOC);
}

$already_submitted = $submitted_data ? true : false;

// If already submitted, use submitted data; otherwise use auto-fill data
if ($already_submitted) {
    $full_name = $submitted_data['full_name'];
    $address = $submitted_data['address'];
    $email = $submitted_data['email'];
    $student_id_number = $submitted_data['student_id_number'];
    $batch_code = $submitted_data['batch_code'];
    $has_visa = $submitted_data['has_visa'];
    $award_title = $submitted_data['award_title'];
    $emergency_contact = $submitted_data['emergency_contact'];
    $emergency_relationship = $submitted_data['emergency_relationship'];
    $company_name = $submitted_data['company_name'];
    $company_address = $submitted_data['company_address'];
    $company_phone = $submitted_data['company_phone'];
    $company_email = $submitted_data['company_email'];
    $placement_job_title = $submitted_data['placement_job_title'];
    $placement_job_role = $submitted_data['placement_job_role'];
    $mentor_name = $submitted_data['mentor_name'];
    $mentor_phone = $submitted_data['mentor_phone'];
    $mentor_email = $submitted_data['mentor_email'];
    $start_date = $submitted_data['start_date'];
    $end_date = $submitted_data['end_date'];
} else {
    // Initialize empty values for form fields that aren't auto-filled
    $address = '';
    $batch_code = '';
    $has_visa = '';
    $emergency_contact = '';
    $emergency_relationship = '';
    $company_name = '';
    $company_address = '';
    $company_phone = '';
    $company_email = '';
    $placement_job_title = '';
    $placement_job_role = '';
    $mentor_name = '';
    $mentor_phone = '';
    $mentor_email = '';
    $start_date = '';
    $end_date = '';
}
?>


<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Industry Placement Form</title>
<script src="https://cdn.tailwindcss.com"></script>

<body class="bg-gray-100 min-h-screen">

<div class="max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-10 p-10">

    <!-- ===================== SESSION MESSAGE HANDLING ===================== -->
    <?php if (isset($_SESSION['success'])): ?>
        <div class="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
            <?php 
                echo $_SESSION['success']; 
                unset($_SESSION['success']); 
            ?>
        </div>
    <?php endif; ?>

    <?php if (isset($_SESSION['error'])): ?>
        <div class="mb-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg">
            <?php 
                echo $_SESSION['error']; 
                unset($_SESSION['error']); 
            ?>
        </div>
    <?php endif; ?>

    <!-- ============================================================= -->
    <!-- SHOW THE FORM (WITH OR WITHOUT SUBMITTED DATA)                -->
    <!-- ============================================================= -->

    <?php if ($already_submitted): ?>
        <div class="mb-6 p-4 bg-blue-100 border border-blue-300 text-blue-800 rounded-lg">
            <h2 class="text-xl font-semibold mb-2">Industry Placement Form - Submitted</h2>
            <p>You have already completed this form. The information below is read-only. If you need changes, please contact your coordinator.</p>
        </div>
    <?php endif; ?>

    <h1 class="text-2xl font-bold text-center mb-8 text-gray-800">Industry Placement Form</h1>

    <form action="../controllers/industry_placement_process.php" method="POST" <?= $already_submitted ? 'onsubmit="return false;"' : '' ?>>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                <!-- ================== STUDENT SECTION ================== -->
                <div class="border rounded-lg p-6 shadow-sm bg-gray-50">
                    <h2 class="text-xl font-semibold mb-4 text-blue-700">Student Details</h2>

                    <div class="space-y-4">

                        <div>
                            <label class="font-medium">Full Name</label>
                            <input type="text" name="full_name" required
                                   value="<?= htmlspecialchars($full_name) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Address</label>
                            <input type="text" name="address" required
                                   value="<?= htmlspecialchars($address) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Email</label>
                            <input type="email" name="email" required
                                   value="<?= htmlspecialchars($email) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Student ID</label>
                            <input type="text" name="student_id_number" required
                                   value="<?= htmlspecialchars($student_id_number) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Batch Code</label>
                            <input type="text" name="batch_code" required
                                   value="<?= htmlspecialchars($batch_code) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Do you have a visa?</label>
                            <div class="mt-1 flex gap-4">
                                <label><input type="radio" name="has_visa" value="yes" required <?= ($has_visa === 'yes') ? 'checked' : '' ?> <?= $already_submitted ? 'disabled' : '' ?>> Yes</label>
                                <label><input type="radio" name="has_visa" value="no" <?= ($has_visa === 'no') ? 'checked' : '' ?> <?= $already_submitted ? 'disabled' : '' ?>> No</label>
                            </div>
                        </div>

                        <div>
                            <label class="font-medium">Award Title</label>
                            <input type="text" name="award_title" required
                                   value="<?= htmlspecialchars($award_title) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Emergency Contact</label>
                            <input type="text" name="emergency_contact" required
                                   value="<?= htmlspecialchars($emergency_contact) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Relationship</label>
                            <input type="text" name="emergency_relationship" required
                                   value="<?= htmlspecialchars($emergency_relationship) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                    </div>
                </div>

                <!-- ================== ORGANIZATION SECTION ================== -->
                <div class="border rounded-lg p-6 shadow-sm bg-gray-50">
                    <h2 class="text-xl font-semibold mb-4 text-green-700">Internship Details</h2>

                    <div class="space-y-4">

                        <div>
                            <label class="font-medium">Company Name</label>
                            <input type="text" name="company_name" required
                                   value="<?= htmlspecialchars($company_name) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Company Address</label>
                            <input type="text" name="company_address" required
                                   value="<?= htmlspecialchars($company_address) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Company Phone</label>
                            <input type="text" name="company_phone" required
                                   value="<?= htmlspecialchars($company_phone) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Company Email</label>
                            <input type="email" name="company_email" required
                                   value="<?= htmlspecialchars($company_email) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Placement Job Title</label>
                            <input type="text" name="placement_job_title" required
                                   value="<?= htmlspecialchars($placement_job_title) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Placement Job Role</label>
                            <input type="text" name="placement_job_role" required
                                   value="<?= htmlspecialchars($placement_job_role) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Mentor Name</label>
                            <input type="text" name="mentor_name" required
                                   value="<?= htmlspecialchars($mentor_name) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Mentor Phone</label>
                            <input type="text" name="mentor_phone" required
                                   value="<?= htmlspecialchars($mentor_phone) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Mentor Email</label>
                            <input type="email" name="mentor_email" required
                                   value="<?= htmlspecialchars($mentor_email) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">Start Date</label>
                            <input type="date" name="start_date" required
                                   value="<?= htmlspecialchars($start_date) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                        <div>
                            <label class="font-medium">End Date</label>
                            <input type="date" name="end_date" required
                                   value="<?= htmlspecialchars($end_date) ?>"
                                   <?= $already_submitted ? 'readonly' : '' ?>
                                   class="w-full mt-1 p-2 border rounded-lg <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : '' ?>">
                        </div>

                    </div>
                </div>

            </div>

            <?php if (!$already_submitted): ?>
                <div class="mt-10 flex justify-center">
                    <button type="submit"
                            class="bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                        Submit Form
                    </button>
                </div>
            <?php endif; ?>

        </form>

</div>

</body>
</html>
