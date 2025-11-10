<?php
session_start();
require '../config/db.php';
require_once '../includes/header.php';

// Ensure only logged-in students can access
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}

// Fetch current student details
$stmt = $pdo->prepare("SELECT * FROM students WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Profile</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body class="bg-gray-100 min-h-screen font-sans">
 <!-- Page Layout -->
  <div class="max-w-6xl mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">

    <!-- LEFT SECTION: Profile Info -->
    <div class="bg-blue-600 text-white md:w-1/3 p-8 flex flex-col items-center">
      <img src="../<?= htmlspecialchars($student['profile_picture'] ?? 'uploads/profile/default.png') ?>" 
           onerror="this.src='../uploads/profile/default.png'"
           class="w-32 h-32 rounded-full border-4 border-white object-cover mb-4">

      <h2 class="text-2xl font-semibold mb-1">
        <?= htmlspecialchars($student['first_name'] . " " . $student['last_name']) ?>
      </h2>
      <p class="text-blue-100 mb-2"><?= htmlspecialchars($student['degree']) ?> (<?= htmlspecialchars($student['degree_level']) ?>)</p>
      <p class="text-sm text-blue-100 mb-4"><?= htmlspecialchars($_SESSION['email']) ?></p>

      <div class="w-full border-t border-blue-400 my-4"></div>

      <div class="w-full space-y-2 text-sm">
        <p><i class="fa-solid fa-id-card mr-2"></i><strong>CB Number:</strong> <?= htmlspecialchars($student['cb_number']) ?></p>
        <p><i class="fa-solid fa-phone mr-2"></i><strong>Contact:</strong> <?= htmlspecialchars($student['contact_number']) ?></p>
        <p><i class="fa-solid fa-briefcase mr-2"></i><strong>Availability:</strong> <?= htmlspecialchars($student['availability']) ?></p>
      </div>

      <?php if (!empty($student['cv'])): ?>
        <a href="../<?= htmlspecialchars($student['cv']) ?>" target="_blank"
           class="mt-6 inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-4 py-2 rounded-md shadow hover:bg-gray-100">
          <i class="fa-solid fa-file-pdf"></i> View CV
        </a>
      <?php endif; ?>
    </div>

    <!-- RIGHT SECTION: Edit Form -->
    <div class="md:w-2/3 p-8">
      <?php if (isset($_SESSION['error'])): ?>
        <p class="mb-6 text-center text-red-600 font-medium">
          <?= htmlspecialchars($_SESSION['error']); unset($_SESSION['error']); ?>
        </p>
      <?php endif; ?>
      <?php if (isset($_SESSION['success'])): ?>
        <p class="mb-6 text-center text-green-600 font-medium">
          <?= htmlspecialchars($_SESSION['success']); unset($_SESSION['success']); ?>
        </p>
      <?php endif; ?>

      <h3 class="text-xl font-semibold text-gray-800 mb-6">Edit Profile</h3>

      <form action="../controllers/update_profile.php" method="POST" enctype="multipart/form-data" class="space-y-6">

        <!-- Contact Number -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Contact Number</label>
          <input type="text" name="contact_number" 
                 value="<?= htmlspecialchars($student['contact_number']) ?>"
                 class="w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300">
        </div>

        <!-- Availability -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Availability</label>
          <div class="flex gap-6 mt-2">
            <label class="flex items-center gap-2">
              <input type="radio" name="availability" value="Full-Time"
                <?= ($student['availability'] === 'Full-Time') ? 'checked' : '' ?>>
              <span>Full-Time</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="availability" value="Part-Time"
                <?= ($student['availability'] === 'Part-Time') ? 'checked' : '' ?>>
              <span>Part-Time</span>
            </label>
          </div>
        </div>

        <!-- CV Upload -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Upload New CV</label>
          <input type="file" name="cv" accept=".pdf" class="w-full border-gray-300 rounded-md p-2">
        </div>

        <!-- Profile Picture Upload -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Change Profile Picture</label>
          <input type="file" name="profile_picture" accept="image/*" class="w-full border-gray-300 rounded-md p-2">
        </div>

        <div class="pt-4">
          <button type="submit" 
                  class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>

</body>
</html>
