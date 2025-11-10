<?php
session_start();
require '../config/db.php';
require_once '../includes/coordinatorheader.php';

// Fetch predefined skills
$stmt = $pdo->query("SELECT * FROM skills ORDER BY name ASC");
$skills = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Post Internship</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">

  <!-- Page Container -->
  <div class="max-w-7xl mx-auto px-8 py-10">
    <!-- Header -->
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-gray-800">Post Internship Opportunity</h1>
    </div>
    <!-- Flash Messages -->
    <?php if (isset($_SESSION['success'])): ?>
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded-lg">
        <strong>Success!</strong> <?= $_SESSION['success']; ?>
      </div>
      <?php unset($_SESSION['success']); endif; ?>

    <?php if (isset($_SESSION['error'])): ?>
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded-lg">
        <strong>Error!</strong> <?= $_SESSION['error']; ?>
      </div>
      <?php unset($_SESSION['error']); endif; ?>

    <!-- Form Card -->
    <div class="bg-white p-10 rounded-2xl shadow-lg">
      <form action="../controllers/internship_process.php" method="POST" enctype="multipart/form-data" class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <!-- Left Column -->
        <div class="space-y-6">

          <div>
            <label class="block text-gray-700 font-medium mb-1">Title</label>
            <input type="text" name="title" required
                   class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Company Name</label>
            <input type="text" name="company_name" required
                   class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Company Logo</label>
            <input type="file" name="company_logo" accept="image/*"
                   class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Location</label>
            <input type="text" name="location" required
                   class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Type</label>
            <select name="type" required
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">Select Type</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Duration</label>
            <select name="duration" required
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">--Select--</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

        </div>

        <!-- Right Column -->
        <div class="space-y-6">

          <div>
            <label class="block text-gray-700 font-medium mb-1">Company Website</label>
            <input type="url" name="website" placeholder="https://example.com"
                   class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Employer Email</label>
            <input type="email" name="employer_email" required
                   class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Deadline</label>
            <input type="date" name="deadline" required
                   class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Description</label>
            <textarea name="description" rows="3" required
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Responsibilities</label>
            <textarea name="responsibilities" rows="3"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
          </div>

          <div>
            <span class="block text-gray-700 font-medium mb-2">Stipend</span>
            <div class="flex items-center gap-6">
              <label class="flex items-center gap-2">
                <input type="radio" name="stipend" value="Paid" required>
                <span>Paid</span>
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" name="stipend" value="Unpaid" required>
                <span>Unpaid</span>
              </label>
            </div>
          </div>

        </div>

        <!-- Full Width Section (Skills + Button) -->
        <div class="lg:col-span-2 space-y-6">
          <div>
            <label class="block text-gray-700 font-medium mb-2">Required Skills</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <?php foreach ($skills as $skill): ?>
                <label class="flex items-center gap-2 border border-gray-200 p-2 rounded-lg hover:bg-gray-50">
                  <input type="checkbox" name="skills[]" value="<?= $skill['id'] ?>">
                  <span><?= htmlspecialchars($skill['name']) ?></span>
                </label>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="text-center pt-4">
            <button type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow">
              Post Internship
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</body>
</html>

