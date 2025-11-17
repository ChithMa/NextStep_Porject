<?php
session_start();
require_once "../config/db.php"; // $pdo

// Verify coordinator
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// Validate internship ID
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    $_SESSION['error'] = "Invalid internship selected.";
    header("Location: ../views/posting_history.php");
    exit;
}

$internship_id = (int)$_GET['id'];

try {
    // 1️⃣ Fetch all custom CVs for this internship
    $stmt = $pdo->prepare("SELECT cv FROM applications WHERE internship_id = ? AND apply_type = 'custom_cv'");
    $stmt->execute([$internship_id]);
    $customCvs = $stmt->fetchAll(PDO::FETCH_COLUMN);

    // 2️⃣ Delete files from uploads folder
    foreach ($customCvs as $cv) {
        $filePath = __DIR__ . "/../" . $cv; // $cv already stores relative path
        if (file_exists($filePath)) {
            unlink($filePath);
        }
    }

    // 3️⃣ Delete the internship (cascades remove applications and skills)
    $delStmt = $pdo->prepare("DELETE FROM internships WHERE id = ?");
    $delStmt->execute([$internship_id]);

    if ($delStmt->rowCount() > 0) {
        $_SESSION['success'] = "Internship and all related records (including custom CVs) deleted successfully.";
    } else {
        $_SESSION['error'] = "Internship not found.";
    }

} catch (Exception $e) {
    $_SESSION['error'] = "Error deleting internship: " . $e->getMessage();
}

// Redirect back
header("Location: ../views/posting_history.php");
exit;
