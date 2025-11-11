<?php
session_start();
require '../config/db.php'; // PDO connection

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    $_SESSION['error'] = "You must be logged in as a student to apply.";
    header("Location: ../login.php");
    exit;
}

$student_id = $_SESSION['user_id'] ?? null;
if (!$student_id) {
    $_SESSION['error'] = "Student information not found.";
    header("Location: ../views/student_dashboard.php");
    exit;
}

// Check POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $_SESSION['error'] = "Invalid request method.";
    header("Location: ../views/student_dashboard.php");
    exit;
}

// Validate internship_id and apply_type
$internship_id = $_POST['internship_id'] ?? null;
$apply_type = $_POST['apply_type'] ?? null;

if (!$internship_id || !is_numeric($internship_id) || !in_array($apply_type, ['profile', 'custom_cv'])) {
    $_SESSION['error'] = "Invalid application request.";
    header("Location: ../views/student_dashboard.php");
    exit;
}

$internship_id = (int)$internship_id;

// Check if the student already applied
$stmtCheck = $pdo->prepare("SELECT * FROM applications WHERE student_id = ? AND internship_id = ?");
$stmtCheck->execute([$student_id, $internship_id]);
if ($stmtCheck->rowCount() > 0) {
    $_SESSION['error'] = "You have already applied for this internship.";
    header("Location: ../views/internship_details.php?id={$internship_id}");
    exit;
}

// Handle CV for custom_cv
$cvPath = null;
if ($apply_type === 'custom_cv') {
    if (!isset($_FILES['custom_cv']) || $_FILES['custom_cv']['error'] !== UPLOAD_ERR_OK) {
        $_SESSION['error'] = "Please upload a valid CV (PDF).";
        header("Location: ../views/internship_details.php?id={$internship_id}");
        exit;
    }

    $fileTmp = $_FILES['custom_cv']['tmp_name'];
    $fileName = basename($_FILES['custom_cv']['name']);
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if ($fileExt !== 'pdf') {
        $_SESSION['error'] = "Only PDF files are allowed for custom CV.";
        header("Location: ../views/internship_details.php?id={$internship_id}");
        exit;
    }

    $uploadDir = '../uploads/cv/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);

    $newFileName = uniqid('cv_', true) . '.pdf';
    $destPath = $uploadDir . $newFileName;

    if (!move_uploaded_file($fileTmp, $destPath)) {
        $_SESSION['error'] = "Error uploading your CV.";
        header("Location: ../views/internship_details.php?id={$internship_id}");
        exit;
    }

    $cvPath = 'uploads/cv/' . $newFileName;
}

// Insert application
try {
    $stmtInsert = $pdo->prepare("
        INSERT INTO applications (student_id, internship_id, apply_type, cv) 
        VALUES (?, ?, ?, ?)
    ");
    $stmtInsert->execute([$student_id, $internship_id, $apply_type, $cvPath]);

    $_SESSION['success'] = "Application submitted successfully!";
    header("Location: ../views/internship_details.php?id={$internship_id}");
    exit;

} catch (Exception $e) {
    $_SESSION['error'] = "Error submitting application: " . $e->getMessage();
    header("Location: ../views/internship_details.php?id={$internship_id}");
    exit;
}
?>
