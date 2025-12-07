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

  <!-- Notification Logic -->
  <?php
  // Fetch unread notifications
  $notifCount = 0;
  $notifs = [];
  if (isset($_SESSION['user_id'])) {
      $stmt = $pdo->prepare("SELECT * FROM notifications WHERE user_id = ? AND is_read = 0 ORDER BY created_at DESC");
      $stmt->execute([$_SESSION['user_id']]);
      $notifs = $stmt->fetchAll(PDO::FETCH_ASSOC);
      $notifCount = count($notifs);
  }
  ?>

  <!-- Right Section: Profile & Logout -->
  <div class="flex items-center gap-6">
    
    <!-- Notification Bell -->
    <div class="relative group">
        <button class="text-gray-600 hover:text-blue-600 transition relative">
            <i class="fa-solid fa-bell text-xl"></i>
            <?php if ($notifCount > 0): ?>
                <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    <?= $notifCount ?>
                </span>
            <?php endif; ?>
        </button>
        
        <!-- Dropdown -->
        <div class="absolute right-0 mt-2 w-80 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 hidden group-hover:block z-50">
            <div class="bg-gray-50 px-4 py-2 border-b border-gray-100 font-semibold text-gray-700">Notifications</div>
            <div class="max-h-64 overflow-y-auto">
                <?php if ($notifCount === 0): ?>
                    <div class="p-4 text-center text-gray-400 text-sm">No new notifications</div>
                <?php else: ?>
                    <?php foreach ($notifs as $n): ?>
                        <div class="p-4 border-b border-gray-50 hover:bg-blue-50 transition cursor-pointer" onclick="markRead(<?= $n['id'] ?>)">
                            <p class="text-sm text-gray-700"><?= htmlspecialchars($n['message']) ?></p>
                            <span class="text-xs text-gray-400 mt-1 block"><?= date('M j, g:i a', strtotime($n['created_at'])) ?></span>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <?php if ($notifCount > 0): ?>
            <a href="#" onclick="markAllRead()" class="block text-center text-blue-600 text-sm py-2 hover:bg-gray-50 font-medium">Mark all as read</a>
            <?php endif; ?>
        </div>
    </div>
    
    <script>
    function markRead(id) {
        // In real app, AJAX call to update DB
        // For now, reload to simulate clearing (better implementation requires new endpoint)
        let formData = new FormData();
        formData.append('action', 'mark_read');
        formData.append('id', id);
        fetch('../controllers/notification_process.php', { method: 'POST', body: formData }).then(() => location.reload());
    }
    function markAllRead() {
        let formData = new FormData();
        formData.append('action', 'mark_all_read');
        fetch('../controllers/notification_process.php', { method: 'POST', body: formData }).then(() => location.reload());
    }
    </script>
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
