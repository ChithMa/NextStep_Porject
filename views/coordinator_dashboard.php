<?php
session_start();
require_once "../includes/coordinatorheader.php";
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}
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

  <!-- Page Container -->
  <div class="p-8">

    <!-- Header Section -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800">Summary</h1>
      <a href="post_internship.php" 
         class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow">
        + Post Internship
      </a>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Total Users -->
      <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
        <div>
          <h2 class="text-gray-500 text-sm uppercase">Total Users</h2>
          <p class="text-3xl font-bold text-gray-800 mt-2">120</p>
        </div>
        <div class="bg-blue-100 p-4 rounded-full">
          <i class="fa-solid fa-users text-blue-600 text-2xl"></i>
        </div>
      </div>

      <!-- Total Internships -->
      <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
        <div>
          <h2 class="text-gray-500 text-sm uppercase">Internships Posted</h2>
          <p class="text-3xl font-bold text-gray-800 mt-2">45</p>
        </div>
        <div class="bg-green-100 p-4 rounded-full">
          <i class="fa-solid fa-briefcase text-green-600 text-2xl"></i>
        </div>
      </div>

      <!-- Students in Internships -->
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
  </div>
</body>
</html>
