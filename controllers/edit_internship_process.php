<?php
session_start();
require_once "../config/db.php";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $_SESSION['error'] = "Invalid request.";
    header("Location: coordinator_dashboard.php");
    exit;
}
// Helper: sanitize input
function s($value) {
    return trim(htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
}

// Collect form inputs
$id = intval($_POST['id']);
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


if(empty($title)){
    $_SESSION['error'] = "Title is Empty";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif(empty($company_name)){
    $_SESSION['error'] = "Company name is empty.";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (empty($location)) {
    $_SESSION['error'] = "Location is empty";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (empty($type)) {
    $_SESSION['error'] = "Job type is empty";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif(empty($description)){
    $_SESSION['error'] = "Job description is empty";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (empty($responsibilities)) {
    $_SESSION['error'] = "Job resposibilties is empty";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (empty($duration)) {
    $_SESSION['error'] = "Duration is empty";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (empty($employer_email)) {
    $_SESSION['error'] = "Please include the email of the employer";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (empty($deadline)) {
    $_SESSION['error'] = "Application deadline is required";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif(empty($skills)){
    $_SESSION['error'] = "Please Select the relavant skills required";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif (!filter_var($employer_email, FILTER_VALIDATE_EMAIL)) {
    $_SESSION['error'] = "Invalid employer email format.";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
elseif ($website && !filter_var($website, FILTER_VALIDATE_URL)) {
    $_SESSION['error'] = "Invalid website URL.";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
else{
//✅ Validate that deadline is a future date
$currentDate = date('Y-m-d');
if ($deadline <= $currentDate) {
    $_SESSION['error'] = "Deadline must be a future date.";
    header("Location: ../views/edit_internship.php?id=" . $id);
    exit;
}
}

// -------------------------------------
// Handle Logo Upload
// -------------------------------------
$logoPath = null; // full path saved to DB (uploads/logo/...)

// If user uploads a new logo
if (!empty($_FILES['company_logo']['name'])) {
    $targetDir = "../uploads/logo/"; // real filesystem path
    $dbDir = "uploads/logo/";       // value saved into DB
    // Validate extension
    $allowed = ['jpg', 'jpeg', 'png', 'gif'];
    $ext = strtolower(pathinfo($_FILES['company_logo']['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed)) {
        $_SESSION['error'] = "Only JPG, PNG, GIF allowed for logo.";
        header("Location: ../views/edit_internship.php?id=" . $id);
        exit;
    }

    // Generate new file path
    $newFileName = "logo_" . time() . "." . $ext;
    $fullUploadPath = $targetDir . $newFileName;
    $logoPath = $dbDir . $newFileName; // this is saved into DB

    // Move image
    if (!move_uploaded_file($_FILES['company_logo']['tmp_name'], $fullUploadPath)) {
        $_SESSION['error'] = "Error uploading logo.";
        header("Location: edit_internship.php?id=" . $id);
        exit;
    }

    // Get old logo to delete
    $stmtLogo = $pdo->prepare("SELECT company_logo FROM internships WHERE id=?");
    $stmtLogo->execute([$id]);
    $oldLogo = $stmtLogo->fetchColumn();

    // Delete old logo file
    if ($oldLogo && file_exists("../" . $oldLogo)) {
        unlink("../" . $oldLogo);
    }

} else {
    // If no new logo uploaded → keep the old one
    $stmtLogo = $pdo->prepare("SELECT company_logo FROM internships WHERE id=?");
    $stmtLogo->execute([$id]);
    $logoPath = $stmtLogo->fetchColumn();
}

// -------------------------------------
// Update Internship
// -------------------------------------
$stmt = $pdo->prepare("
    UPDATE internships SET 
    title=?, company_name=?, location=?, type=?, website=?, 
    description=?, responsibilities=?, stipend=?, duration=?, 
    employer_email=?, deadline=?, company_logo=?
    WHERE id=?
");

$stmt->execute([
    $title, $company_name, $location, $type, $website,
    $description, $responsibilities, $stipend, $duration,
    $employer_email, $deadline, $logoPath, $id
]);

// -------------------------------------
// Update Skills
// -------------------------------------
$pdo->prepare("DELETE FROM internship_skills WHERE internship_id=?")->execute([$id]);

$skillStmt = $pdo->prepare("
    INSERT INTO internship_skills (internship_id, skill_id)
    VALUES (?, ?)
");

foreach ($skills as $skill_id) {
    $skillStmt->execute([$id, $skill_id]);
}

$_SESSION['success'] = "Internship updated successfully!";
header("Location: ../views/edit_internship.php?id=" . $id);
exit;


