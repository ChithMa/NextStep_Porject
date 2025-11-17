<?php
session_start();
require_once "../config/db.php"; // your DB connection

// Reject non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $_SESSION['error'] = "Invalid request method.";
    header("Location: ../views/industry_placement.php");
    exit;
}

// ---- Helper function ----
function clean($value)
{
    return htmlspecialchars(trim($value));
}

// -------------------------
// 1️⃣ COLLECT + CLEAN DATA
// -------------------------
$student_id             = $_SESSION['user_id'];  // logged-in student ID

$full_name              = clean($_POST['full_name'] ?? '');
$address                = clean($_POST['address'] ?? '');
$email                  = clean($_POST['email'] ?? '');
$student_id_number      = clean($_POST['student_id_number'] ?? '');
$batch_code             = clean($_POST['batch_code'] ?? '');
$has_visa               = clean($_POST['has_visa'] ?? '');
$award_title            = clean($_POST['award_title'] ?? '');
$emergency_contact      = clean($_POST['emergency_contact'] ?? '');
$emergency_relationship = clean($_POST['emergency_relationship'] ?? '');

$company_name           = clean($_POST['company_name'] ?? '');
$company_address        = clean($_POST['company_address'] ?? '');
$company_phone          = clean($_POST['company_phone'] ?? '');
$company_email          = clean($_POST['company_email'] ?? '');
$placement_job_title    = clean($_POST['placement_job_title'] ?? '');
$placement_job_role     = clean($_POST['placement_job_role'] ?? '');
$mentor_name            = clean($_POST['mentor_name'] ?? '');
$mentor_phone           = clean($_POST['mentor_phone'] ?? '');
$mentor_email           = clean($_POST['mentor_email'] ?? '');
$start_date             = clean($_POST['start_date'] ?? '');
$end_date               = clean($_POST['end_date'] ?? '');


// ---------------------------------
// 2️⃣ VALIDATIONS (basic + logical)
// ---------------------------------
$errors = [];

if (!$full_name) $errors[] = "Full name is required.";
if (!$address) $errors[] = "Address is required.";
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required.";
if (!$student_id_number) $errors[] = "Student ID is required.";
if (!$batch_code) $errors[] = "Batch code is required.";
if (!$has_visa) $errors[] = "Please select visa availability.";
if (!$award_title) $errors[] = "Award title is required.";
if (!$emergency_contact) $errors[] = "Emergency contact is required.";
if (!$emergency_relationship) $errors[] = "Emergency relationship is required.";

if (!$company_name) $errors[] = "Company name is required.";
if (!$company_address) $errors[] = "Company address is required.";
if (!$company_phone) $errors[] = "Company phone is required.";
if (!$company_email || !filter_var($company_email, FILTER_VALIDATE_EMAIL))
    $errors[] = "Valid company email is required.";

if (!$placement_job_title) $errors[] = "Placement job title is required.";
if (!$placement_job_role) $errors[] = "Placement job role is required.";

if (!$mentor_name) $errors[] = "Mentor name is required.";
if (!$mentor_phone) $errors[] = "Mentor phone is required.";
if (!$mentor_email || !filter_var($mentor_email, FILTER_VALIDATE_EMAIL))
    $errors[] = "Valid mentor email is required.";

if (!$start_date) $errors[] = "Start date is required.";
if (!$end_date) $errors[] = "End date is required.";

// Date validation
if ($start_date && $end_date && $end_date < $start_date) {
    $errors[] = "End date cannot be earlier than start date.";
}


// ---------------------------------
// 3️⃣ If validation fails → redirect
// ---------------------------------
if (!empty($errors)) {
    $_SESSION['error'] = implode("<br>", $errors);
    header("Location: ../views/industry_placement.php");
    exit;
}


// ---------------------------------
// 4️⃣ INSERT INTO DATABASE
// ---------------------------------
try {
    $sql = "INSERT INTO industry_placements (
                student_id, full_name, address, email, student_id_number, batch_code, has_visa,
                award_title, emergency_contact, emergency_relationship,
                company_name, company_address, company_phone, company_email,
                placement_job_title, placement_job_role,
                mentor_name, mentor_phone, mentor_email,
                start_date, end_date
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        $student_id,
        $full_name, $address, $email, $student_id_number, $batch_code, $has_visa,
        $award_title, $emergency_contact, $emergency_relationship,
        $company_name, $company_address, $company_phone, $company_email,
        $placement_job_title, $placement_job_role,
        $mentor_name, $mentor_phone, $mentor_email,
        $start_date, $end_date
    ]);

    $_SESSION['success'] = "Industry placement form submitted successfully!";
    header("Location: ../views/industry_placement.php");
    exit;

} catch (Exception $e) {
    $_SESSION['error'] = "Unexpected error: " . $e->getMessage();
    header("Location: ../views/industry_placement.php");
    exit;
}
