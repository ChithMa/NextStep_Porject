<?php
session_start();
require '../config/db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}

$user_id = $_SESSION['user_id'];

// Fetch current student data
$stmt = $pdo->prepare("SELECT * FROM students WHERE user_id = ?");
$stmt->execute([$user_id]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);

$contact = trim($_POST['contact_number'] ?? $student['contact_number']);
$availability = $_POST['availability'] ?? $student['availability'];

// Get preferences
$preference1 = trim($_POST['preference1'] ?? '');
$preference2 = trim($_POST['preference2'] ?? '');
$preference3 = trim($_POST['preference3'] ?? '');

$cv_path = $student['cv'];
$profile_path = $student['profile_picture'];

// Validate contact number
if (empty($contact)) {
    $_SESSION['error'] = "Contact number cannot be empty.";
    header("Location: ../views/profile.php");
    exit;
}

if (!preg_match('/^\d{10}$/', $contact)) {
    $_SESSION['error'] = "Contact number must contain exactly 10 digits.";
    header("Location: ../views/profile.php");
    exit;
}

// Validate preferences
$preferences = array_filter([$preference1, $preference2, $preference3], function($v) {
    return $v !== '';
});

// Check for duplicates
if (count($preferences) !== count(array_unique($preferences))) {
    $_SESSION['error'] = "Each preference must be unique. Duplicate selections are not allowed.";
    header("Location: ../views/profile.php");
    exit;
}

// Validate preference values (only allow valid options)
$validPreferences = ['Software Development', 'UI/UX Design', 'Data Analysis', 'Cyber Security'];
foreach ($preferences as $pref) {
    if (!in_array($pref, $validPreferences)) {
        $_SESSION['error'] = "Invalid preference selected. Please choose from the available options.";
        header("Location: ../views/profile.php");
        exit;
    }
}

// Handle CV upload
if (!empty($_FILES['cv']['name'])) {
    $cvFile = $_FILES['cv'];
    $ext = pathinfo($cvFile['name'], PATHINFO_EXTENSION);
    if ($ext !== 'pdf') {
        $_SESSION['error'] = "Only PDF files allowed for CV.";
        header("Location: ../views/profile.php");
        exit;
    }

    // Delete old CV if exists
    if (!empty($cv_path) && file_exists("../" . $cv_path)) {
        unlink("../" . $cv_path);
    }

    $cv_newname = "uploads/cv/" . uniqid() . ".pdf";
    move_uploaded_file($cvFile['tmp_name'], "../" . $cv_newname);
    $cv_path = $cv_newname;
}

// Handle profile picture upload (optional)
if (!empty($_FILES['profile_picture']['name'])) {
    $profileFile = $_FILES['profile_picture'];
    $ext = pathinfo($profileFile['name'], PATHINFO_EXTENSION);
    $allowed = ['jpg', 'jpeg', 'png', 'gif'];
    if (!in_array(strtolower($ext), $allowed)) {
        $_SESSION['error'] = "Invalid image format for profile picture.";
        header("Location: ../views/profile.php");
        exit;
    }

    // Delete old picture if exists
    if (!empty($profile_path) && file_exists("../" . $profile_path) && $profile_path !== "uploads/profile/default.png") {
        unlink("../" . $profile_path);
    }

    $profile_newname = "uploads/profile/" . uniqid() . "." . $ext;
    move_uploaded_file($profileFile['tmp_name'], "../" . $profile_newname);
    $profile_path = $profile_newname;
}

// Update DB - use transaction for data consistency
try {
    $pdo->beginTransaction();
    
    // Update student profile
    $update = $pdo->prepare("
        UPDATE students 
        SET contact_number = ?, availability = ?, cv = ?, profile_picture = ? 
        WHERE user_id = ?
    ");
    $update->execute([$contact, $availability, $cv_path, $profile_path, $user_id]);
    
    // Get student ID
    $student_id = $student['id'];
    
    // Delete existing preferences
    $deletePrefs = $pdo->prepare("DELETE FROM preferences WHERE student_id = ?");
    $deletePrefs->execute([$student_id]);
    
    // Insert new preferences
    if (!empty($preferences)) {
        $insertPref = $pdo->prepare("INSERT INTO preferences (student_id, preference_name) VALUES (?, ?)");
        foreach ($preferences as $pref) {
            $insertPref->execute([$student_id, $pref]);
        }
    }
    
    $pdo->commit();
    
    $_SESSION['success'] = "Profile updated successfully!";
    header("Location: ../views/profile.php");
    exit;
    
} catch (Exception $e) {
    $pdo->rollBack();
    $_SESSION['error'] = "An error occurred while updating your profile. Please try again.";
    header("Location: ../views/profile.php");
    exit;
}
