<?php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: ../login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">
  <div class="bg-white shadow-md p-6 flex justify-between items-center">
    <div class="flex items-center gap-4">
      <div>
        <h2 class="text-lg font-semibold">Welcome, <?= htmlspecialchars($_SESSION['full_name']) ?></h2>
        <p class="text-sm text-gray-500">Admin Dashboard</p>
      </div>
    </div>
    <a href="../logout.php" class="text-red-500 font-semibold hover:underline">Logout</a>
  </div>

  <div class="p-8">
    <h3 class="text-xl font-bold text-blue-700">Dashboard Content</h3>
    <p class="mt-2 text-gray-600">Here you can view internship details, update profile, and more.</p>
  </div>
</body>
</html>
