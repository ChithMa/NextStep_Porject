<?php
require_once '../config/db.php';
// Fetch First Name and Last Name with the Profile Picture
$stmt = $pdo->prepare("SELECT * FROM coordinators WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$coord = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<div class="bg-blue-800 shadow-md p-6 flex justify-between items-center">
    <div class="flex items-center gap-4">
      <div>
        <h2 class="text-lg text-white font-semibold">Welcome, <?= htmlspecialchars($coord['first_name']." ".$coord["last_name"] ) ?></h2>
        <p class="text-sm text-white">coordinator Dashboard</p>
      </div>
    </div>
    <a href="../logout.php" class="flex items-center gap-2 text-red-500 font-semibold hover:underline">
      <i class="fa-solid fa-right-from-bracket text-2xl"></i>
      Logout
    </a>
  </div>
