<?php
session_start();
require_once '../config/db.php';
require_once '../includes/header.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}

$student_id = $_SESSION['user_id'] ?? null;
if (!$student_id) {
    $_SESSION['error'] = "Student information not found.";
    header("Location: student_dashboard.php");
    exit;
}

// Fetch all applied internships (including expired)
$stmt = $pdo->prepare("
    SELECT a.applied_at, i.id AS internship_id, i.title, i.company_name, i.company_logo
    FROM applications a
    JOIN internships i ON a.internship_id = i.id
    WHERE a.student_id = ?
    ORDER BY a.applied_at DESC
");
$stmt->execute([$student_id]);
$applications = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Job History</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50 min-h-screen">
  <div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
    <h2 class="text-3xl font-bold text-blue-700 mb-8 flex items-center gap-3">
      <i class="fa-solid fa-briefcase text-blue-600"></i>
      My Internship Applications
    </h2>

    <!-- Session Messages -->
    <?php if (isset($_SESSION['success'])): ?>
      <div class="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 border border-green-300">
        <?= htmlspecialchars($_SESSION['success']) ?>
      </div>
      <?php unset($_SESSION['success']); ?>
    <?php endif; ?>

    <?php if (isset($_SESSION['error'])): ?>
      <div class="bg-red-100 text-red-800 px-4 py-2 rounded mb-4 border border-red-300">
        <?= htmlspecialchars($_SESSION['error']) ?>
      </div>
      <?php unset($_SESSION['error']); ?>
    <?php endif; ?>

    <!-- Application List -->
    <?php if (count($applications) > 0): ?>
      <div class="space-y-4">
        <?php foreach ($applications as $app): ?>
          <div class="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between">
            <div class="flex items-center gap-5">
              <div class="w-16 h-16 flex-shrink-0">
                <img src="../<?= htmlspecialchars($app['company_logo']) ?>" 
                     onerror="this.src='../uploads/profile/default.png'" 
                     class="w-16 h-16 object-cover rounded-xl border border-gray-300 bg-white" 
                     alt="Logo">
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800"><?= htmlspecialchars($app['title']) ?></h3>
                <p class="text-gray-500"><?= htmlspecialchars($app['company_name']) ?></p>
                <p class="text-sm text-gray-400 mt-1">
                  <i class="fa-regular fa-calendar-days mr-1 text-blue-500"></i>
                  Applied on <?= date('F j, Y', strtotime($app['applied_at'])) ?>
                </p>
              </div>
            </div>

            <a href="internship_details.php?id=<?= $app['internship_id'] ?>" 
               class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <i class="fa-solid fa-eye"></i>
              View Details
            </a>
          </div>
        <?php endforeach; ?>
      </div>
    <?php else: ?>
      <div class="text-center py-12">
        <i class="fa-regular fa-folder-open text-gray-400 text-6xl mb-4"></i>
        <p class="text-gray-500 text-lg">You haven’t applied for any internships yet.</p>
        <a href="student_dashboard.php" 
           class="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
          Browse Internships
        </a>
      </div>
    <?php endif; ?>
  </div>
</body>
</html>

