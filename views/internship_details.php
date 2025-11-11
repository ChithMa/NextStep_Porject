<?php
session_start();
require_once '../includes/header.php';
require '../config/db.php'; // your PDO connection

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}

// Validate internship ID
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    $_SESSION['error'] = "Invalid internship selected.";
    header("Location: student_dashboard.php");
    exit;
}

$internship_id = (int)$_GET['id'];

// Fetch internship with skills
$stmt = $pdo->prepare("
    SELECT i.*, GROUP_CONCAT(s.name SEPARATOR ', ') AS skills
    FROM internships i
    LEFT JOIN internship_skills iskill ON i.id = iskill.internship_id
    LEFT JOIN skills s ON iskill.skill_id = s.id
    WHERE i.id = ?
    GROUP BY i.id
");
$stmt->execute([$internship_id]);
$internship = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$internship) {
    $_SESSION['error'] = "Internship not found.";
    header("Location: student_dashboard.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?= htmlspecialchars($internship['title']) ?> | Internship Details</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">
  <div class="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
    <!-- Flash Messages -->
    <?php if (isset($_SESSION['success'])): ?>
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded-lg">
        <strong>Success!</strong> <?= $_SESSION['success']; ?>
      </div>
      <?php unset($_SESSION['success']); endif; ?>

    <?php if (isset($_SESSION['error'])): ?>
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded-lg">
        <strong>Error!</strong> <?= $_SESSION['error']; ?>
      </div>
      <?php unset($_SESSION['error']); endif; ?>
    <div class="flex items-center mb-6">
      <?php if (!empty($internship['company_logo'])): ?>
        <img src="../<?= htmlspecialchars($internship['company_logo']) ?>" class="w-20 h-20 rounded-lg object-cover mr-6">
      <?php else: ?>
        <div class="w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center mr-6">
          <i class="fa-solid fa-building text-gray-500 text-2xl"></i>
        </div>
      <?php endif; ?>

      <div>
        <h1 class="text-2xl font-bold text-gray-800"><?= htmlspecialchars($internship['title']) ?></h1>
        <p class="text-gray-600"><?= htmlspecialchars($internship['company_name']) ?></p>
        <p class="text-sm text-gray-500 mt-1"><strong>Location:</strong> <?= htmlspecialchars($internship['location']) ?></p>
        <p class="text-sm text-gray-500"><strong>Type:</strong> <?= htmlspecialchars($internship['type']) ?></p>
      </div>
    </div>

    <!-- Internship Details -->
    <div class="mb-4">
      <h2 class="text-lg font-semibold text-gray-700">Description</h2>
      <p class="text-gray-600 mt-1"><?= nl2br(htmlspecialchars($internship['description'])) ?></p>
    </div>

    <div class="mb-4">
      <h2 class="text-lg font-semibold text-gray-700">Responsibilities</h2>
      <p class="text-gray-600 mt-1"><?= nl2br(htmlspecialchars($internship['responsibilities'] ?? 'Not specified')) ?></p>
    </div>

    <div class="mb-4 grid grid-cols-2 gap-4">
      <p><strong>Stipend:</strong> <?= htmlspecialchars($internship['stipend']) ?></p>
      <p><strong>Duration:</strong> <?= htmlspecialchars($internship['duration']) ?></p>
      <p><strong>Employer Email:</strong> <?= htmlspecialchars($internship['employer_email']) ?></p>
      <p><strong>Deadline:</strong> <?= htmlspecialchars($internship['deadline']) ?></p>
    </div>

    <div class="mb-6">
      <p><strong>Skills Required:</strong> <?= htmlspecialchars($internship['skills'] ?? 'Not specified') ?></p>
    </div>

    <!-- Apply Buttons -->
    <div class="flex gap-4 items-center">
      <form action="../controllers/apply_internships.php" method="POST">
        <input type="hidden" name="internship_id" value="<?= $internship['id'] ?>">
        <input type="hidden" name="apply_type" value="profile">
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
          Apply through Profile
        </button>
      </form>

      <form action="../controllers/apply_internships.php" method="POST" enctype="multipart/form-data" id="customCVForm">
        <input type="hidden" name="internship_id" value="<?= $internship['id'] ?>">
        <input type="hidden" name="apply_type" value="custom_cv">
        <input type="file" name="custom_cv" accept="application/pdf" required class="hidden" id="customCV">
        <label for="customCV" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer inline-flex items-center justify-center">
          Apply using Custom CV
        </label>
      </form>
    </div>
  </div>
  <script>
  // Auto-submit form when a file is selected
  const customCVInput = document.getElementById('customCV');
  const customCVForm = document.getElementById('customCVForm');

  customCVInput.addEventListener('change', function() {
    if (this.files.length > 0) {
      customCVForm.submit();
    }
  });
</script>
</body>
</html>
