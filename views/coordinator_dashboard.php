<?php
session_start();
require_once "../includes/coordinatorheader.php";
require_once "../config/db.php";

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// Fetch active internships (deadline >= today)
$stmt = $pdo->prepare("
    SELECT i.*, 
    (SELECT COUNT(*) FROM applications a WHERE a.internship_id = i.id) AS applicant_count
    FROM internships i
    WHERE i.deadline >= CURDATE()
    ORDER BY i.created_at DESC
");

$stmt->execute();
$internships = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Coordinator Dashboard</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen">

<div class="p-8">

  <!-- Header -->
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-4xl font-bold text-gray-800">Summary</h1>

    <a href="post_internship.php" 
       class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow">
      + Post Internship
    </a>
  </div>

  <!-- Summary Cards (unchanged) -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

    <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div>
        <h2 class="text-gray-500 text-sm uppercase">Total Users</h2>
        <p class="text-3xl font-bold text-gray-800 mt-2">120</p>
      </div>
      <div class="bg-blue-100 p-4 rounded-full">
        <i class="fa-solid fa-users text-blue-600 text-2xl"></i>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div>
        <h2 class="text-gray-500 text-sm uppercase">Internships Posted</h2>
        <p class="text-3xl font-bold text-gray-800 mt-2">45</p>
      </div>
      <div class="bg-green-100 p-4 rounded-full">
        <i class="fa-solid fa-briefcase text-green-600 text-2xl"></i>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div>
        <h2 class="text-gray-500 text-sm uppercase">Students in Internships</h2>
        <p class="text-3xl font-bold text-gray-800 mt-2">32</p>
      </div>
      <div class="bg-yellow-100 p-4 rounded-full">
        <i class="fa-solid fa-user-graduate text-yellow-600 text-2xl"></i>
      </div>
    </div>
  </div>

  <!-- Recent Internships Section -->
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Recently Published Internships</h2>

  <?php if (empty($internships)): ?>
      <p class="text-gray-600">No active internships available.</p>
  <?php else: ?>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <?php foreach ($internships as $job): ?>
      <div class="bg-white shadow-md rounded-xl p-6">

        <!-- Logo -->
        <div class="flex items-center mb-4">
          <?php if (!empty($job['company_logo'])): ?>
            <img src="../<?= htmlspecialchars($job['company_logo']) ?>" 
                 class="w-16 h-16 object-cover rounded-lg mr-4">
          <?php else: ?>
            <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
              <i class="fa-solid fa-building text-gray-500 text-xl"></i>
            </div>
          <?php endif; ?>

          <div>
            <h3 class="text-xl font-semibold text-gray-800"><?= htmlspecialchars($job['title']) ?></h3>
            <p class="text-gray-500"><?= htmlspecialchars($job['company_name']) ?></p>
          </div>
        </div>

        <!-- Details -->
        <p class="text-sm text-gray-600"><strong>Published:</strong> <?= htmlspecialchars(date("Y-m-d", strtotime($job['created_at']))) ?></p>
        <p class="text-sm text-gray-600"><strong>Deadline:</strong> <?= htmlspecialchars($job['deadline']) ?></p>
        <p class="text-sm text-gray-600"><strong>Applicants:</strong> <?= $job['applicant_count'] ?></p>
       <!-- Edit Button -->
        <a href="edit_internship.php?id=<?= $job['id'] ?>" 
           class="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold">
          Edit Internship
        </a>
      </div>
    <?php endforeach; ?>
  </div>
  <?php endif; ?>
</div>
</body>
</html>

