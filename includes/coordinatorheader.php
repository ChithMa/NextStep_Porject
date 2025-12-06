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

  <!-- Right Section: Notifications & Logout -->
  <div class="flex items-center gap-6">
    
    <?php
    // Notification Logic: Check for internships expiring within 2 days
    // This variable $expiringInternships will also be available to pages including this header
    $expiringStmt = $pdo->prepare("
        SELECT title, deadline 
        FROM internships 
        WHERE deadline >= CURDATE() 
        AND deadline <= DATE_ADD(CURDATE(), INTERVAL 2 DAY)
    ");
    $expiringStmt->execute();
    $expiringInternships = $expiringStmt->fetchAll(PDO::FETCH_ASSOC);
    $notificationCount = count($expiringInternships);
    ?>

    <!-- Notification Bell -->
    <div class="relative">
        <button id="notificationBtn" class="relative text-white hover:text-gray-200 focus:outline-none mt-1">
            <i class="fa-solid fa-bell text-xl"></i>
            <?php if ($notificationCount > 0): ?>
                <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    <?= $notificationCount ?>
                </span>
            <?php endif; ?>
        </button>

        <!-- Dropdown -->
        <div id="notificationDropdown" class="hidden absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200">
            <div class="bg-gray-50 px-4 py-2 border-b border-gray-200">
                <h3 class="text-sm font-semibold text-gray-700">Notifications</h3>
            </div>
            <div class="max-h-64 overflow-y-auto">
                <?php if ($notificationCount > 0): ?>
                    <?php foreach ($expiringInternships as $notif): ?>
                        <div class="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition">
                            <div class="flex items-start gap-3">
                                <div class="text-yellow-500 mt-1"><i class="fa-solid fa-triangle-exclamation"></i></div>
                                <div>
                                    <p class="text-sm text-gray-800 font-medium">Expiring Soon</p>
                                    <p class="text-xs text-gray-600"><?= htmlspecialchars($notif['title']) ?></p>
                                    <p class="text-xs text-gray-500 mt-1">Deadline: <?= htmlspecialchars($notif['deadline']) ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="px-4 py-6 text-center text-gray-500 text-sm">
                        <i class="fa-regular fa-bell-slash text-2xl mb-2 block"></i>
                        No new notifications
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <!-- Logout -->
    <a href="../logout.php" class="flex items-center gap-2 text-red-500 font-semibold hover:underline transition">
      <i class="fa-solid fa-right-from-bracket text-lg"></i>
      Logout
    </a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const notifBtn = document.getElementById('notificationBtn');
    const notifDropdown = document.getElementById('notificationDropdown');

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            notifDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', function(e) {
            if (!notifBtn.contains(e.target) && !notifDropdown.contains(e.target)) {
                notifDropdown.classList.add('hidden');
            }
        });
    }
});
</script>
