<?php
session_start();
require_once "../includes/header.php";
?>
<!DOCTYPE html>
<html lang="en">
    <meta charset="UTF-8">
    <title>Industry Placement Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hidden-step { display: none; }
        .active-step { display: block; }
    </style>
<body class="bg-gray-100 min-h-screen">

<div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10 p-8">

    <!-- Progress Steps -->
    <div class="flex justify-between mb-8">
        <div id="stepIndicator1" class="flex-1 text-center font-semibold text-blue-600">
            Step 1: Student Details
        </div>
        <div id="stepIndicator2" class="flex-1 text-center font-semibold text-gray-400">
            Step 2: Organization Details
        </div>
    </div>

    <form action="industry_placement_process.php" method="POST">

        <!-- Step 1: Student Details -->
        <div id="step1" class="active-step">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Student Information</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div class="mt-1">
                        <label class="mr-4">
                            <input type="radio" name="has_visa" value="yes" required> Yes
                        </label>
                        <label>
                            <input type="radio" name="has_visa" value="no"> No
                        </label>
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

            <div class="mt-8 flex justify-end">
                <button type="button" onclick="nextStep()"
                        class="bg-blue-600 text-white px-6 py-2 rounded-lg">
                    Next
                </button>
            </div>
        </div>

        <!-- Step 2: Organization Details -->
        <div id="step2" class="hidden-step">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Organization Details</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

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

            <div class="mt-8 flex justify-between">
                <button type="button" onclick="previousStep()"
                        class="bg-gray-500 text-white px-6 py-2 rounded-lg">
                    Previous
                </button>

                <button type="submit"
                        class="bg-green-600 text-white px-6 py-2 rounded-lg">
                    Submit Form
                </button>
            </div>
        </div>

    </form>
</div>

<script>
    function nextStep() {
        document.getElementById("step1").classList.remove("active-step");
        document.getElementById("step1").classList.add("hidden-step");

        document.getElementById("step2").classList.remove("hidden-step");
        document.getElementById("step2").classList.add("active-step");

        document.getElementById("stepIndicator1").classList.add("text-gray-400");
        document.getElementById("stepIndicator2").classList.add("text-blue-600");
    }

    function previousStep() {
        document.getElementById("step2").classList.remove("active-step");
        document.getElementById("step2").classList.add("hidden-step");

        document.getElementById("step1").classList.remove("hidden-step");
        document.getElementById("step1").classList.add("active-step");

        document.getElementById("stepIndicator1").classList.remove("text-gray-400");
        document.getElementById("stepIndicator1").classList.add("text-blue-600");
        document.getElementById("stepIndicator2").classList.remove("text-blue-600");
    }
</script>

</body>
</html>
