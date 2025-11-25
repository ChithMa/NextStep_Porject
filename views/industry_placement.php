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
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Industry Placement Form</title>
    <link href="../src/output.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-gray-100">

<div class="w-full bg-white shadow-md">
    <div class="max-w-7xl mx-auto p-6 sm:p-8 lg:p-10">

        <!-- ===================== SESSION MESSAGE HANDLING ===================== -->
        <?php if (isset($_SESSION['success'])): ?>
            <div class="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
                <?php 
                    echo htmlspecialchars($_SESSION['success']); 
                    unset($_SESSION['success']); 
                ?>
            </div>
        <?php endif; ?>

        <?php if (isset($_SESSION['error'])): ?>
            <div class="mb-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg">
                <?php 
                    echo htmlspecialchars($_SESSION['error']); 
                    unset($_SESSION['error']); 
                ?>
            </div>
        <?php endif; ?>

        <?php if ($already_submitted): ?>
            <div class="mb-6 p-4 bg-blue-100 border border-blue-300 text-blue-800 rounded-lg">
                <h2 class="text-xl font-semibold mb-2">Industry Placement Form - Submitted</h2>
                <p class="text-sm sm:text-base">You have already completed this form. The information below is read-only. If you need changes, please contact your coordinator.</p>
            </div>
        <?php endif; ?>

        <h1 class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">Industry Placement Form</h1>

        <form action="../controllers/industry_placement_process.php" method="POST" <?= $already_submitted ? 'onsubmit="return false;"' : '' ?>>

            <!-- ================== STUDENT SECTION (FULL WIDTH TOP) ================== -->
            <div class="border border-gray-300 rounded-lg p-6 sm:p-8 shadow-sm bg-blue-50 mb-6 sm:mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-700 flex items-center">
                    <span class="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    Student Details
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                    <div>
                        <label for="full_name" class="block font-medium text-gray-700 mb-2">Full Name <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="full_name" 
                               name="full_name" 
                               required
                               value="<?= htmlspecialchars($full_name) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="email" class="block font-medium text-gray-700 mb-2">Email <span class="text-red-500">*</span></label>
                        <input type="email" 
                               id="email" 
                               name="email" 
                               required
                               value="<?= htmlspecialchars($email) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="student_id_number" class="block font-medium text-gray-700 mb-2">Student ID <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="student_id_number" 
                               name="student_id_number" 
                               required
                               value="<?= htmlspecialchars($student_id_number) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="address" class="block font-medium text-gray-700 mb-2">Address <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="address" 
                               name="address" 
                               required
                               value="<?= htmlspecialchars($address) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="Enter your address"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="batch_code" class="block font-medium text-gray-700 mb-2">Batch Code <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="batch_code" 
                               name="batch_code" 
                               required
                               value="<?= htmlspecialchars($batch_code) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="e.g., COM2463"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="award_title" class="block font-medium text-gray-700 mb-2">Award Title <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="award_title" 
                               name="award_title" 
                               required
                               value="<?= htmlspecialchars($award_title) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="emergency_contact" class="block font-medium text-gray-700 mb-2">Emergency Contact <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="emergency_contact" 
                               name="emergency_contact" 
                               required
                               value="<?= htmlspecialchars($emergency_contact) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="+94 XX XXX XXXX"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="emergency_relationship" class="block font-medium text-gray-700 mb-2">Relationship <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="emergency_relationship" 
                               name="emergency_relationship" 
                               required
                               value="<?= htmlspecialchars($emergency_relationship) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="e.g., Parent, Sibling"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label class="block font-medium text-gray-700 mb-2">Do you have a visa? <span class="text-red-500">*</span></label>
                        <div class="flex items-center gap-6 h-12">
                            <label class="flex items-center cursor-pointer">
                                <input type="radio" 
                                       name="has_visa" 
                                       value="yes" 
                                       required 
                                       <?= ($has_visa === 'yes') ? 'checked' : '' ?> 
                                       <?= $already_submitted ? 'disabled' : '' ?> 
                                       class="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500">
                                <span class="ml-2 text-gray-700">Yes</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input type="radio" 
                                       name="has_visa" 
                                       value="no" 
                                       <?= ($has_visa === 'no') ? 'checked' : '' ?> 
                                       <?= $already_submitted ? 'disabled' : '' ?> 
                                       class="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500">
                                <span class="ml-2 text-gray-700">No</span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <!-- ================== INTERNSHIP DETAILS (FULL WIDTH BOTTOM) ================== -->
            <div class="border border-gray-300 rounded-lg p-6 sm:p-8 shadow-sm mb-6 sm:mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-700 flex items-center">
                    <span class="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    Internship Details
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                    <div>
                        <label for="company_name" class="block font-medium text-gray-700 mb-2">Company Name <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="company_name" 
                               name="company_name" 
                               required
                               value="<?= htmlspecialchars($company_name) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="Enter company name"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="company_address" class="block font-medium text-gray-700 mb-2">Company Address <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="company_address" 
                               name="company_address" 
                               required
                               value="<?= htmlspecialchars($company_address) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="Enter company address"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="company_phone" class="block font-medium text-gray-700 mb-2">Company Phone <span class="text-red-500">*</span></label>
                        <input type="tel" 
                               id="company_phone" 
                               name="company_phone" 
                               required
                               value="<?= htmlspecialchars($company_phone) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="+94 XX XXX XXXX"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="company_email" class="block font-medium text-gray-700 mb-2">Company Email <span class="text-red-500">*</span></label>
                        <input type="email" 
                               id="company_email" 
                               name="company_email" 
                               required
                               value="<?= htmlspecialchars($company_email) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="company@example.com"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="placement_job_title" class="block font-medium text-gray-700 mb-2">Placement Job Title <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="placement_job_title" 
                               name="placement_job_title" 
                               required
                               value="<?= htmlspecialchars($placement_job_title) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="e.g., Software Engineer Intern"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="placement_job_role" class="block font-medium text-gray-700 mb-2">Placement Job Role <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="placement_job_role" 
                               name="placement_job_role" 
                               required
                               value="<?= htmlspecialchars($placement_job_role) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="Brief description of role"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="mentor_name" class="block font-medium text-gray-700 mb-2">Mentor Name <span class="text-red-500">*</span></label>
                        <input type="text" 
                               id="mentor_name" 
                               name="mentor_name" 
                               required
                               value="<?= htmlspecialchars($mentor_name) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="Full name of mentor"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="mentor_phone" class="block font-medium text-gray-700 mb-2">Mentor Phone <span class="text-red-500">*</span></label>
                        <input type="tel" 
                               id="mentor_phone" 
                               name="mentor_phone" 
                               required
                               value="<?= htmlspecialchars($mentor_phone) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="+94 XX XXX XXXX"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="mentor_email" class="block font-medium text-gray-700 mb-2">Mentor Email <span class="text-red-500">*</span></label>
                        <input type="email" 
                               id="mentor_email" 
                               name="mentor_email" 
                               required
                               value="<?= htmlspecialchars($mentor_email) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               placeholder="mentor@company.com"
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="start_date" class="block font-medium text-gray-700 mb-2">Start Date <span class="text-red-500">*</span></label>
                        <input type="date" 
                               id="start_date" 
                               name="start_date" 
                               required
                               value="<?= htmlspecialchars($start_date) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                    <div>
                        <label for="end_date" class="block font-medium text-gray-700 mb-2">End Date <span class="text-red-500">*</span></label>
                        <input type="date" 
                               id="end_date" 
                               name="end_date" 
                               required
                               value="<?= htmlspecialchars($end_date) ?>"
                               <?= $already_submitted ? 'readonly' : '' ?>
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition <?= $already_submitted ? 'bg-gray-100 cursor-not-allowed' : 'bg-white' ?>">
                    </div>

                </div>
            </div>

            <?php if (!$already_submitted): ?>
                <div class="flex justify-center">
                    <button type="submit"
                            class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Submit Form
                    </button>
                </div>
            <?php endif; ?>

        </form>

    </div>
</div>
</body>
</html>