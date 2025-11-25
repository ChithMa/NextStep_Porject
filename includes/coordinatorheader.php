<?php
require_once '../config/db.php';
// Fetch First Name and Last Name with the Profile Picture
$stmt = $pdo->prepare("SELECT * FROM coordinators WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$coord = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!-- Navbar -->
<div class="bg-blue-800 shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <!-- Left Section: Welcome -->
    <div class="flex items-center gap-4">
      <div>
        <h2 class="text-lg font-semibold text-white">Welcome, <?= htmlspecialchars($coord['first_name']." ".$coord["last_name"] ) ?></h2>
        <p class="text-sm text-white">Coordinator Dashboard</p>
      </div>
    </div>

  <!-- Center Section: Navigation Links -->
  <div class="flex items-center gap-6">
    <a href="coordinator_dashboard.php" class="text-white hover:text-black font-medium transition">Home</a>
    <a href="posting_history.php" class="text-white hover:text-black font-medium transition">Posting History</a>
  </div>

  <!-- Right Section: Logout -->
    <a href="../logout.php" class="flex items-center gap-2 text-red-500 font-semibold hover:underline transition">
      <i class="fa-solid fa-right-from-bracket text-lg"></i>
      Logout
    </a>
</div>
