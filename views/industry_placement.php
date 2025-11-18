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
$student_id = $_SESSION['user_id'];

// ---------------------------------------
// CHECK IF STUDENT ALREADY SUBMITTED (PDO)
// ---------------------------------------
$stmt = $pdo->prepare("SELECT * FROM industry_placements WHERE student_id = ?");
$stmt->execute([$student_id]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

$already_submitted = $result ? true : false;
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
    <!-- STUDENT ALREADY SUBMITTED → SHOW MESSAGE ONLY                -->
    <!-- ============================================================= -->
    <?php if ($already_submitted): ?>

        <div class="p-6 bg-blue-100 border border-blue-300 text-blue-800 rounded-lg text-center">
            <h2 class="text-xl font-semibold">Industry Placement Form Already Submitted</h2>
            <p class="mt-2">You have already completed this form. If you need changes, please contact your coordinator.</p>
        </div>

    <?php else: ?>

        <!-- ============================================================= -->
        <!-- SHOW THE FORM (STUDENT HAS NOT SUBMITTED YET)                -->
        <!-- ============================================================= -->

        <h1 class="text-2xl font-bold text-center mb-8 text-gray-800">Industry Placement Form</h1>

        <form action="../controllers/industry_placement_process.php" method="POST">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                <!-- ================== STUDENT SECTION ================== -->
                <div class="border rounded-lg p-6 shadow-sm bg-gray-50">
                    <h2 class="text-xl font-semibold mb-4 text-blue-700">Student Details</h2>

                    <div class="space-y-4">

                        <div>
                            <label class="font-medium">Full Name</label>
                            <input type="text" name="full_name" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Address</label>
                            <input type="text" name="address" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Email</label>
                            <input type="email" name="email" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Student ID</label>
                            <input type="text" name="student_id_number" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Batch Code</label>
                            <input type="text" name="batch_code" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Do you have a visa?</label>
                            <div class="mt-1 flex gap-4">
                                <label><input type="radio" name="has_visa" value="yes" required> Yes</label>
                                <label><input type="radio" name="has_visa" value="no"> No</label>
                            </div>
                        </div>

                        <div>
                            <label class="font-medium">Award Title</label>
                            <select name="award_title" required
                                    class="w-full mt-1 p-2 border rounded-lg">
                                <option value="">Select Award Title</option>
                                <option value="BSc (Hons) Computing">BSc (Hons) Computing</option>
                                <option value="BSc (Hons) Information Systems">BSc (Hons) Information Systems</option>
                                <option value="BSc (Hons) Software Engineering">BSc (Hons) Software Engineering</option>
                            </select>
                        </div>

                        <div>
                            <label class="font-medium">Emergency Contact</label>
                            <input type="text" name="emergency_contact" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Relationship</label>
                            <input type="text" name="emergency_relationship" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                    </div>
                </div>

                <!-- ================== ORGANIZATION SECTION ================== -->
                <div class="border rounded-lg p-6 shadow-sm bg-gray-50">
                    <h2 class="text-xl font-semibold mb-4 text-green-700">Organization Details</h2>

                    <div class="space-y-4">

                        <div>
                            <label class="font-medium">Company Name</label>
                            <input type="text" name="company_name" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Company Address</label>
                            <input type="text" name="company_address" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Company Phone</label>
                            <input type="text" name="company_phone" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Company Email</label>
                            <input type="email" name="company_email" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Placement Job Title</label>
                            <input type="text" name="placement_job_title" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Placement Job Role</label>
                            <input type="text" name="placement_job_role" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Mentor Name</label>
                            <input type="text" name="mentor_name" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Mentor Phone</label>
                            <input type="text" name="mentor_phone" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Mentor Email</label>
                            <input type="email" name="mentor_email" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">Start Date</label>
                            <input type="date" name="start_date" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                        <div>
                            <label class="font-medium">End Date</label>
                            <input type="date" name="end_date" required
                                   class="w-full mt-1 p-2 border rounded-lg">
                        </div>

                    </div>
                </div>

            </div>

            <div class="mt-10 flex justify-center">
                <button type="submit"
                        class="bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                    Submit Form
                </button>
            </div>

        </form>

    <?php endif; ?>

</div>

</body>
</html>
