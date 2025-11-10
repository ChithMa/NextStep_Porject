<?php
$title = "Student Dashboard";
session_start();
require_once "../includes/header.php";
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo $title ?></title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">
  <div class="p-8">
    <h3 class="text-xl font-bold text-blue-700">Dashboard Content</h3>
    <p class="mt-2 text-gray-600">Here you can view internship details, update profile, and more.</p>
  </div>
</body>
</html>
