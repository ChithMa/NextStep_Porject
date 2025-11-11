<?php
$title = "Student Dashboard";
session_start();
require_once "../includes/header.php";
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}

// Fetch internships with skills
$stmt = $pdo->query("
    SELECT i.id, i.title, i.company_name, i.company_logo,
           GROUP_CONCAT(s.name SEPARATOR ', ') AS skills
    FROM internships i
    LEFT JOIN internship_skills iskill ON i.id = iskill.internship_id
    LEFT JOIN skills s ON iskill.skill_id = s.id
    GROUP BY i.id
    ORDER BY i.created_at DESC
");
$internships = $stmt->fetchAll(PDO::FETCH_ASSOC);
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
  <!-- Internship Listings -->
  <div class="p-8">
    <h3 class="text-2xl font-bold text-blue-700 mb-6">Available Internship Opportunities</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <?php if (count($internships) > 0): ?>
        <?php foreach ($internships as $internship): ?>
          <div class="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <?php if (!empty($internship['company_logo'])): ?>
                <img src="../<?= htmlspecialchars($internship['company_logo']) ?>" 
                     class="w-14 h-14 rounded-full border object-cover mr-4" alt="Logo">
              <?php else: ?>
                <div class="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <i class="fa-solid fa-building text-gray-500 text-xl"></i>
                </div>
              <?php endif; ?>

              <div>
                <h4 class="text-lg font-semibold text-gray-800"><?= htmlspecialchars($internship['title']) ?></h4>
                <p class="text-sm text-gray-600"><?= htmlspecialchars($internship['company_name']) ?></p>
              </div>
            </div>

            <p class="text-sm text-gray-500 mb-3"><strong>Skills:</strong> 
              <?= htmlspecialchars($internship['skills'] ?? 'Not specified') ?>
            </p>

            <a href="internship_details.php?id=<?= $internship['id'] ?>"
               class="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Apply Now
            </a>
          </div>
        <?php endforeach; ?>
      <?php else: ?>
        <p class="text-gray-600">No internships available at the moment.</p>
      <?php endif; ?>
    </div>
  </div>
</body>
</html>
