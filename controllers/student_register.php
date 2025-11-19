<?php
// student_register.php
session_start();
require_once '../config/db.php'; // expects $pdo from db.php

// Helper: sanitize
function s($v) {
    return trim(htmlspecialchars($v, ENT_QUOTES, 'UTF-8'));
}

$errors = [];

// Accept POST only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $_SESSION['error'] = "Invalid request method.";
    header('Location: ../views/register.php');
    exit;
}

// Retrieve and sanitize inputs
$cb_number     = s($_POST['cb_number'] ?? '');
$first_name    = s($_POST['first_name'] ?? '');
$last_name     = s($_POST['last_name'] ?? '');
$contact_number= s($_POST['contact_number'] ?? '');
$degree        = s($_POST['degree'] ?? '');
$degree_level  = s($_POST['degree_level'] ?? '');
$availability  = s($_POST['availability'] ?? '');
$email         = s($_POST['email'] ?? '');
$password      = $_POST['password'] ?? ''; // do not htmlspecialchars the raw password
$preference1   = s($_POST['preference1'] ?? '');
$preference2   = s($_POST['preference2'] ?? '');
$preference3   = s($_POST['preference3'] ?? '');

// File inputs
$cv_file       = $_FILES['cv_file'] ?? null;
$profile_file  = $_FILES['profile_picture'] ?? null;

// Basic validations
if ($cb_number === '') $errors[] = "CB Number is required.";
if ($first_name === '') $errors[] = "First name is required.";
if ($last_name === '') $errors[] = "Last name is required.";
if ($contact_number === '') $errors[] = "Contact number is required.";
if ($degree === '') $errors[] = "Degree is required.";
if ($degree_level === '') $errors[] = "Degree level is required.";
if (!in_array($availability, ['Full-Time', 'Part-Time', 'Full Time', 'Part Time'])) {
    $errors[] = "Select a valid availability option.";
}
if ($email === '') $errors[] = "Email is required.";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Invalid email format.";
if ($password === '' || strlen($password) < 6) $errors[] = "Password is required (minimum 6 characters).";
if ($preference1 === '') $errors[] = "Preference 1 is required.";

// Check CV upload existence
if (!$cv_file || $cv_file['error'] === UPLOAD_ERR_NO_FILE) {
    $errors[] = "CV (PDF) upload is required.";
}

// Validate that preferences are not duplicated (non-empty ones)
$prefs = array_filter([$preference1, $preference2, $preference3], fn($v) => $v !== '');
if (count($prefs) !== count(array_unique($prefs))) {
    $errors[] = "You can't choose the same preference more than once.";
}

// File validation functions
function validate_cv($file, &$err) {
    if ($file['error'] !== UPLOAD_ERR_OK) {
        $err = "Error uploading CV (error code {$file['error']}).";
        return false;
    }
    // max 5MB (adjust as needed)
    $maxSize = 5 * 1024 * 1024;
    if ($file['size'] > $maxSize) {
        $err = "CV must be less than 5 MB.";
        return false;
    }
    // ensure PDF by mime and extension
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    if ($mime !== 'application/pdf') {
        $err = "CV must be a PDF file.";
        return false;
    }
    // optional: check extension
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if ($ext !== 'pdf') {
        $err = "CV file extension must be .pdf";
        return false;
    }
    return true;
}

function validate_profile($file, &$err) {
    if ($file['error'] === UPLOAD_ERR_NO_FILE) {
        // optional
        return true;
    }
    if ($file['error'] !== UPLOAD_ERR_OK) {
        $err = "Error uploading profile picture (error code {$file['error']}).";
        return false;
    }
    // max 2MB
    $maxSize = 2 * 1024 * 1024;
    if ($file['size'] > $maxSize) {
        $err = "Profile picture must be less than 2 MB.";
        return false;
    }
    // mime check: allow jpeg/png/gif/webp
    $allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    if (!in_array($mime, $allowed)) {
        $err = "Profile picture must be an image (jpeg, png, gif, webp).";
        return false;
    }
    return true;
}

// Run file validations if previous errors empty
if (empty($errors)) {
    $cv_err = '';
    if (!validate_cv($cv_file, $cv_err)) $errors[] = $cv_err;

    $profile_err = '';
    if ($profile_file && $profile_file['error'] !== UPLOAD_ERR_NO_FILE) {
        if (!validate_profile($profile_file, $profile_err)) $errors[] = $profile_err;
    }
}

// Unique checks (email & cb_number)
if (empty($errors)) {
    try {
        // Email exists?
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
        $stmt->execute([$email]);
        if ($stmt->fetchColumn() > 0) {
            $errors[] = "Email is already registered.";
        }

        // CB exists?
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM students WHERE cb_number = ?");
        $stmt->execute([$cb_number]);
        if ($stmt->fetchColumn() > 0) {
            $errors[] = "CB Number is already registered.";
        }
    } catch (PDOException $e) {
        $errors[] = "Database error while checking uniqueness: " . $e->getMessage();
    }
}

// If errors, redirect back with messages
if (!empty($errors)) {
    $_SESSION['error'] = implode(' ', $errors);
    header('Location: ../views/register.php');
    exit;
}

// At this point validation passed — proceed to file storage and DB transaction

// Prepare upload directories
//$uploadBase = __DIR__ . '/uploads';
$uploadBase = dirname(__DIR__) . '/uploads';
$cvDir = $uploadBase . '/cv';
$profileDir = $uploadBase . '/profile';

if (!is_dir($cvDir) && !mkdir($cvDir, 0755, true)) {
    $_SESSION['error'] = "Failed to create CV upload directory.";
    header('Location: ../views/register.php');
    exit;
}
if (!is_dir($profileDir) && !mkdir($profileDir, 0755, true)) {
    $_SESSION['error'] = "Failed to create profile picture upload directory.";
    header('Location: ../views/register.php');
    exit;
}

// Build safe unique filenames
function safe_filename($original) {
    $original = preg_replace('/[^A-Za-z0-9\.\-_]/', '_', $original);
    $rand = bin2hex(random_bytes(6));
    return time() . "_" . $rand . "_" . $original;
}

$cv_new_name = safe_filename($cv_file['name']);
$cv_target = $cvDir . '/' . $cv_new_name;
$cv_db_path = 'uploads/cv/' . $cv_new_name;

$profile_db_path = null;
$profile_target = null;
$profile_new_name = null;
if ($profile_file && $profile_file['error'] !== UPLOAD_ERR_NO_FILE) {
    $profile_new_name = safe_filename($profile_file['name']);
    $profile_target = $profileDir . '/' . $profile_new_name;
    $profile_db_path = 'uploads/profile/' . $profile_new_name;
}

// Move uploaded files
$moved_cv = move_uploaded_file($cv_file['tmp_name'], $cv_target);
if (!$moved_cv) {
    $_SESSION['error'] = "Failed to move uploaded CV file.";
    header('Location: ../views/register.php');
    exit;
}

$moved_profile = true;
if ($profile_target) {
    $moved_profile = move_uploaded_file($profile_file['tmp_name'], $profile_target);
    if (!$moved_profile) {
        // remove CV file we already moved
        @unlink($cv_target);
        $_SESSION['error'] = "Failed to move uploaded profile picture.";
        header('Location: ../views/register.php');
        exit;
    }
}

// Now DB transaction: insert into users -> students -> preferences
try {
    $pdo->beginTransaction();

    // Insert user
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->execute([$email, $password_hash]);
    $user_id = $pdo->lastInsertId();

    // Insert student
    $stmt = $pdo->prepare("INSERT INTO students 
        (user_id, cb_number, first_name, last_name, contact_number, degree, degree_level, availability, cv, profile_picture)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $user_id,
        $cb_number,
        $first_name,
        $last_name,
        $contact_number,
        $degree,
        $degree_level,
        // Normalize availability values
        (in_array($availability, ['Full-Time','Full Time']) ? 'Full-Time' : 'Part-Time'),
        $cv_db_path,
        $profile_db_path
    ]);
    $student_id = $pdo->lastInsertId();

    // Insert preferences (only non-empty)
    $prefInsert = $pdo->prepare("INSERT INTO preferences (student_id, preference_name) VALUES (?, ?)");
    foreach ([$preference1, $preference2, $preference3] as $p) {
        if ($p !== '') {
            $prefInsert->execute([$student_id, $p]);
        }
    }

    $pdo->commit();

    $_SESSION['success'] = "Registration completed successfully. You may now log in.";
    header('Location: ../login.php');
    exit;

} catch (Exception $e) {
    // rollback and cleanup files
    $pdo->rollBack();
    if (file_exists($cv_target)) @unlink($cv_target);
    if ($profile_target && file_exists($profile_target)) @unlink($profile_target);

    // log error in production instead of exposing
    $_SESSION['error'] = "Registration failed: " . $e->getMessage();
    header('Location:../views/register.php');
    exit;
}
