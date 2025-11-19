<?php
session_start();
require_once "../config/db.php";
require_once "../includes/coordinatorheader.php";

// Verify coordinator login
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// Validate student ID
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    $_SESSION['error'] = "Invalid student selected.";
    header("Location: coordinator_dashboard.php");
    exit;
}

$student_id = (int)$_GET['id'];

// Fetch student details
$stmt = $pdo->prepare("
    SELECT s.*, u.email 
    FROM students s
    INNER JOIN users u ON s.user_id = u.id
    WHERE s.id = ?
");
$stmt->execute([$student_id]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$student) {
    $_SESSION['error'] = "Student not found.";
    header("Location: coordinator_dashboard.php");
    exit;
}

// Fetch student preferences
$prefStmt = $pdo->prepare("SELECT preference_name FROM preferences WHERE student_id = ?");
$prefStmt->execute([$student_id]);
$preferences = $prefStmt->fetchAll(PDO::FETCH_COLUMN);

// Check if student is in industry placement
$placementStmt = $pdo->prepare("SELECT * FROM industry_placements WHERE student_id = ?");
$placementStmt->execute([$student_id]);
$placement = $placementStmt->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Profile</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body class="bg-gray-100 min-h-screen font-sans">
  <div class="max-w-6xl mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
    
    <!-- LEFT SECTION: Profile Info -->
    <div class="bg-blue-600 text-white md:w-1/3 p-8 flex flex-col items-center">
      <img src="../<?= htmlspecialchars($student['profile_picture'] ?? 'uploads/profile/default.png') ?>" 
           onerror="this.src='../uploads/profile/default.png'"
           class="w-32 h-32 rounded-full border-4 border-white object-cover mb-4">

      <h2 class="text-2xl font-semibold mb-1">
        <?= htmlspecialchars($student['first_name'] . " " . $student['last_name']) ?>
      </h2>
      <p class="text-blue-100 mb-2"><?= htmlspecialchars($student['degree']) ?> (<?= htmlspecialchars($student['degree_level']) ?>)</p>
      <p class="text-sm text-blue-100 mb-4"><?= htmlspecialchars($student['email']) ?></p>

      <div class="w-full border-t border-blue-400 my-4"></div>

      <div class="w-full space-y-2 text-sm">
        <p><i class="fa-solid fa-id-card mr-2"></i><strong>CB Number:</strong> <?= htmlspecialchars($student['cb_number']) ?></p>
        <p><i class="fa-solid fa-phone mr-2"></i><strong>Contact:</strong> <?= htmlspecialchars($student['contact_number']) ?></p>
        <p><i class="fa-solid fa-briefcase mr-2"></i><strong>Availability:</strong> <?= htmlspecialchars($student['availability']) ?></p>
      </div>

      <?php if (!empty($student['cv'])): ?>
        <a href="../<?= htmlspecialchars($student['cv']) ?>" target="_blank"
           class="mt-6 inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-4 py-2 rounded-md shadow hover:bg-gray-100">
          <i class="fa-solid fa-file-pdf"></i> View CV
        </a>
      <?php endif; ?>
    </div>

    <!-- RIGHT SECTION: Details -->
    <div class="md:w-2/3 p-8">
      <div class="mb-6">
        <a href="coordinator_dashboard.php" class="text-blue-600 hover:underline">
          <i class="fa-solid fa-arrow-left mr-2"></i>Back to Dashboard
        </a>
      </div>

      <h3 class="text-xl font-semibold text-gray-800 mb-6">Student Information</h3>

      <div class="space-y-4">
        <!-- Preferences -->
        <?php if (!empty($preferences)): ?>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Career Preferences</label>
            <div class="flex flex-wrap gap-2">
              <?php foreach ($preferences as $pref): ?>
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  <?= htmlspecialchars($pref) ?>
                </span>
              <?php endforeach; ?>
            </div>
          </div>
        <?php endif; ?>

        <!-- Industry Placement Status -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Placement Status</label>
          <?php if ($placement): ?>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-green-800 font-medium">
                <i class="fa-solid fa-check-circle mr-2"></i>Currently in Industry Placement
              </p>
              <p class="text-sm text-gray-600 mt-2">
                <strong>Company:</strong> <?= htmlspecialchars($placement['company_name']) ?><br>
                <strong>Position:</strong> <?= htmlspecialchars($placement['placement_job_title']) ?><br>
                <strong>Period:</strong> <?= htmlspecialchars($placement['start_date']) ?> to <?= htmlspecialchars($placement['end_date']) ?>
              </p>
            </div>
          <?php else: ?>
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p class="text-gray-600">
                <i class="fa-solid fa-info-circle mr-2"></i>Not currently in industry placement
              </p>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

