<?php
require_once '../config/db.php';
// Fetch First Name and Last Name with the Profile Picture
$stmt = $pdo->prepare("SELECT * FROM students WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!-- Navbar -->
<div class="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <!-- Left Section: Profile + Welcome -->
  <div class="flex items-center gap-4">
    <img src="../<?= htmlspecialchars($student['profile_picture']) ?>" 
         onerror="this.src='../uploads/profile/default.png'" 
         class="w-12 h-12 rounded-full border border-gray-300 object-cover" 
         alt="Profile">
    <div>
      <h2 class="text-lg font-semibold text-gray-800">
        Welcome, <?= htmlspecialchars($student['first_name'] . " " . $student['last_name']) ?>
      </h2>
      <p class="text-sm text-gray-500">Student Dashboard</p>
    </div>
  </div>

  <!-- Center Section: Navigation Links -->
  <div class="flex items-center gap-6">
    <a href="student_dashboard.php" class="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
    <a href="job_history.php" class="text-gray-700 hover:text-blue-600 font-medium transition">Application History</a>
    <a href="industry_placement.php" class="text-gray-700 hover:text-blue-600 font-medium transition">Apply Placement</a>
     <!-- Add more form links here if needed -->
     <a href="logbook.php" class="text-gray-700 hover:text-blue-600 font-medium transition">Logbook</a>

  </div>

  <!-- Right Section: Profile & Logout -->
  <div class="flex items-center gap-6">
    <!-- Profile Icon -->
    <a href="../views/profile.php" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition">
      <i class="fa-solid fa-user text-xl"></i>
      <span>Profile</span>
    </a>
    <!-- Logout Button -->
    <a href="../logout.php" class="flex items-center gap-2 text-red-500 font-semibold hover:underline transition">
      <i class="fa-solid fa-right-from-bracket text-lg"></i>
      Logout
    </a>
  </div>
</div>
