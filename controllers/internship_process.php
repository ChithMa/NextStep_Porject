<?php
session_start();
require '../config/db.php'; // assumes $pdo is defined

// Handle only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $_SESSION['error'] = "Invalid request method.";
    header("Location: ../views/post_internship.php");
    exit;
}

// Helper: sanitize input
function s($value) {
    return trim(htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
}

// Collect form inputs
$title = s($_POST['title'] ?? '');
$company_name = s($_POST['company_name'] ?? '');
$location = s($_POST['location'] ?? '');
$type = s($_POST['type'] ?? '');
$website = s($_POST['website'] ?? '');
$description = s($_POST['description'] ?? '');
$responsibilities = s($_POST['responsibilities'] ?? '');
$stipend = s($_POST['stipend'] ?? '');
$duration = s($_POST['duration'] ?? '');
$employer_email = s($_POST['employer_email'] ?? '');
$deadline = s($_POST['deadline'] ?? '');
$skills = $_POST['skills'] ?? [];

// Validation
$errors = [];

if ($title === '' || $company_name === '' || $location === '' || $type === '' || $description === '' || $responsibilities === ''||
    $stipend === '' || $duration === '' || $employer_email === '' || $deadline === '' ) {
    $errors[] = "Please fill in all required fields.";
}

if(empty($skills)){
    $errors[] = "Please Select the relavant skills required";
}

if (!filter_var($employer_email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid employer email format.";
}

if ($website && !filter_var($website, FILTER_VALIDATE_URL)) {
    $errors[] = "Invalid website URL.";
}

// ✅ Validate that deadline is a future date
$currentDate = date('Y-m-d');
if ($deadline <= $currentDate) {
    $errors[] = "Deadline must be a future date.";
}

if (!empty($errors)) {
    $_SESSION['error'] = implode('<br>', $errors);
    header("Location: ../views/post_internship.php");
    exit;
}

// --- Handle company logo upload ---
$logoPath = null;

if (!empty($_FILES['company_logo']['name'])) {
    $uploadDir = '../uploads/logo/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $fileTmpPath = $_FILES['company_logo']['tmp_name'];
    $fileName = basename($_FILES['company_logo']['name']);
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $allowedExt = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

    if (in_array($fileExt, $allowedExt)) {
        $newFileName = uniqid('logo_', true) . '.' . $fileExt;
        $destPath = $uploadDir . $newFileName;
        if (move_uploaded_file($fileTmpPath, $destPath)) {
            $logoPath = 'uploads/logo/' . $newFileName;
        } else {
            $_SESSION['error'] = "Error uploading logo file.";
            header("Location:../views/post_internship.php");
            exit;
        }
    } else {
        $_SESSION['error'] = "Invalid logo file type. Allowed: jpg, jpeg, png, gif, webp.";
        header("Location: ../views/post_internship.php");
        exit;
    }
}

// --- Insert internship into database ---
try {
    $pdo->beginTransaction();

    $stmt = $pdo->prepare("
        INSERT INTO internships 
        (title, company_name, company_logo, location, type, website, description, responsibilities, stipend, duration, employer_email, deadline)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $title,
        $company_name,
        $logoPath,
        $location,
        $type,
        $website,
        $description,
        $responsibilities,
        $stipend,
        $duration,
        $employer_email,
        $deadline
    ]);

    $internship_id = $pdo->lastInsertId();

    // Insert selected skills into junction table
    if (!empty($skills)) {
        $stmtSkill = $pdo->prepare("INSERT INTO internship_skills (internship_id, skill_id) VALUES (?, ?)");
        foreach ($skills as $skill_id) {
            $stmtSkill->execute([$internship_id, $skill_id]);
        }
    }

    $pdo->commit();
    $_SESSION['success'] = "Internship posted successfully!";
    header("Location:../views/post_internship.php");
    exit;

} catch (Exception $e) {
    $pdo->rollBack();
    $_SESSION['error'] = "Error: " . $e->getMessage();
    header("Location: ../views/post_internship.php");
    exit;
}
?>
