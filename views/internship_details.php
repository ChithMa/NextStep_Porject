<?php
session_start();
require_once "../includes/header.php";
require_once "../config/db.php";

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'student') {
    header("Location: ../login.php");
    exit;
}

// Check if ID exists
if (!isset($_GET['id'])) {
    header("Location: dashboard.php");
    exit;
}

$id = intval($_GET['id']);

// Fetch internship details
$stmt = $pdo->prepare("SELECT * FROM internships WHERE id = ?");
$stmt->execute([$id]);
$internship = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$internship) {
    echo "<p class='text-red-500 text-center mt-10'>Internship not found.</p>";
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo htmlspecialchars($internship['title']); ?></title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen p-8">
  <div class="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
    <h2 class="text-2xl font-bold text-blue-700 mb-4"><?php echo htmlspecialchars($internship['title']); ?></h2>
    <p class="text-lg text-gray-700 font-medium"><?php echo htmlspecialchars($internship['company_name']); ?></p>
    <p class="text-gray-600 mb-4"><?php echo htmlspecialchars($internship['location']); ?> • <?php echo htmlspecialchars($internship['type']); ?></p>

    <hr class="my-4">

    <h3 class="text-lg font-semibold text-gray-800 mb-2">Description</h3>
    <p class="text-gray-700 mb-4"><?php echo nl2br(htmlspecialchars($internship['description'])); ?></p>

    <h3 class="text-lg font-semibold text-gray-800 mb-2">Responsibilities</h3>
    <p class="text-gray-700 mb-4"><?php echo nl2br(htmlspecialchars($internship['responsibilities'])); ?></p>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p><span class="font-semibold">Duration:</span> <?php echo htmlspecialchars($internship['duration']); ?></p>
        <p><span class="font-semibold">Stipend:</span> <?php echo htmlspecialchars($internship['stipend']); ?></p>
      </div>
      <div>
        <p><span class="font-semibold">Deadline:</span> <?php echo htmlspecialchars($internship['deadline']); ?></p>
        <p><span class="font-semibold">Email:</span> <?php echo htmlspecialchars($internship['employer_email']); ?></p>
      </div>
    </div>

    <div class="mt-6 flex justify-between">
      <a href="dashboard.php" class="text-gray-600 hover:text-gray-800">← Back to Dashboard</a>
      <a href="apply_internship.php?id=<?php echo $internship['id']; ?>" 
         class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Apply Now
      </a>
    </div>
  </div>
</body>
</html>
