<?php
session_start();
require_once '../config/db.php'; // use $pdo

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($email === '' || $password === '') {
    $_SESSION['error'] = "Please fill in all fields.";
    header("Location: login.php");
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user) {
        $_SESSION['error'] = "Invalid email or password.";
        header("Location: ../login.php");
        exit;
    }

    if (!password_verify($password, $user['password'])) {
        $_SESSION['error'] = "Invalid email or password.";
        header("Location: ../login.php");
        exit;
    }

    // Password verified — find full name and profile picture for dashboard
    $fullName = "User";
    $profilePicture = "uploads/profile/default.png"; // fallback default

    if ($user['role'] === 'student') {
        $stmt2 = $pdo->prepare("SELECT first_name, last_name, profile_picture FROM students WHERE user_id = ?");
        $stmt2->execute([$user['id']]);
        $student = $stmt2->fetch();
        if ($student) {
            $fullName = $student['first_name'] . " " . $student['last_name'];
            if (!empty($student['profile_picture'])) {
                $profilePicture = $student['profile_picture'];
            }
        }
    }
    elseif ($user['role'] === 'coordinator') {
        $stmt2 = $pdo->prepare("SELECT first_name, last_name FROM coordinators WHERE user_id = ?");
        $stmt2->execute([$user['id']]);
        $coord = $stmt2->fetch();
        if ($coord) {
            $fullName = $coord['first_name'] . " " . $coord['last_name'];
            if (!empty($coord['profile_picture'])) {
                $profilePicture = $coord['profile_picture'];
            }
        }
    }
    elseif ($user['role'] === 'admin') {
        $stmt2 = $pdo->prepare("SELECT first_name, last_name FROM admins WHERE user_id = ?");
        $stmt2->execute([$user['id']]);
        $admin = $stmt2->fetch();
        if ($admin) {
            $fullName = $admin['first_name'] . " " . $admin['last_name'];
            if (!empty($admin['profile_picture'])) {
                $profilePicture = $admin['profile_picture'];
            }
        }
    }

    // Create session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['role'] = $user['role'];
    $_SESSION['email'] = $user['email']; 
    $_SESSION['full_name'] = $fullName;
    $_SESSION['profile_picture'] = $profilePicture;

    // Redirect by role
    switch ($user['role']) {
        case 'student':
            header("Location: ../views/student_dashboard.php");
            break;
        case 'coordinator':
            header("Location: ../views/coordinator_dashboard.php");
            break;
        case 'admin':
            header("Location: ../views/admin_dashboard.php");
            break;
        default:
            $_SESSION['error'] = "Unknown role type.";
            header("Location: ../login.php");
            break;
    }
    exit;

} catch (PDOException $e) {
    $_SESSION['error'] = "Login failed: " . $e->getMessage();
    header("Location: ../login.php");
    exit;
}
