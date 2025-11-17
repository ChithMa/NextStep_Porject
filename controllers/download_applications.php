<?php
session_start();
require_once "../config/db.php";

// Verify coordinator login
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

// Fetch all applicants for this internship
$query = "
    SELECT 
        a.apply_type,
        a.cv AS custom_cv,
        st.cv AS profile_cv,
        st.first_name,
        st.last_name
    FROM applications a
    INNER JOIN students st ON a.student_id = st.id
    WHERE a.internship_id = ?
";
$stmt = $pdo->prepare($query);
$stmt->execute([$internship_id]);
$applicants = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (empty($applicants)) {
    $_SESSION['error'] = "No applicants found for this internship.";
    header("Location: ../views/posting_history.php");
    exit;
}

// Create a temporary zip file
$zip = new ZipArchive();
$zipName = "internship_{$internship_id}_cvs.zip";
$tempFile = tempnam(sys_get_temp_dir(), 'zip');

if ($zip->open($tempFile, ZipArchive::CREATE) !== TRUE) {
    die("Could not create ZIP file.");
}

$basePath = realpath(__DIR__ . "/../"); // root of your project

foreach ($applicants as $app) {

    $cvFile = ($app['apply_type'] === 'profile') 
                ? $app['profile_cv']
                : $app['custom_cv'];

    if (!$cvFile) continue;

    // Build full system path
    $fullPath = $basePath . "/" . $cvFile;

    // Skip missing file paths
    if (!file_exists($fullPath)) {
        continue;
    }

    // Rename inside ZIP
    $fileNameInZip = $app['first_name'] . "_" . $app['last_name'] . "_" . basename($cvFile);

    $zip->addFile($fullPath, $fileNameInZip);
}

$zip->close();

// Send the zip to browser
header('Content-Type: application/zip');
header('Content-Disposition: attachment; filename="' . $zipName . '"');
header('Content-Length: ' . filesize($tempFile));
readfile($tempFile);

// Delete the temporary file
unlink($tempFile);
exit;
