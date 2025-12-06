<?php
session_start();
require_once "../includes/coordinatorheader.php";
require_once "../config/db.php";

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// SUMMARY COUNTS
$totalUsers = $pdo->query("SELECT COUNT(*) FROM students")->fetchColumn();

$activeInternships = $pdo->query("
    SELECT COUNT(*) 
    FROM internships 
    WHERE deadline >= CURDATE()
")->fetchColumn();

$studentsInInternships = $pdo->query("
    SELECT COUNT(*) 
    FROM industry_placements
")->fetchColumn();

// Fetch active internships (deadline >= today)
$stmt = $pdo->prepare("
    SELECT i.*, 
    (SELECT COUNT(*) FROM applications a WHERE a.internship_id = i.id) AS applicant_count
    FROM internships i
    WHERE i.deadline >= CURDATE()
    ORDER BY i.created_at DESC
");

$stmt->execute();
$internships = $stmt->fetchAll(PDO::FETCH_ASSOC);
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

<div class="p-8">

  <!-- Header -->
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-4xl font-bold text-gray-800">Summary</h1>

    <a href="post_internship.php" 
       class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow">
      + Post Internship
    </a>
  </div>

  <!-- Summary Cards (unchanged) -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

    <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div>
        <h2 class="text-gray-500 text-sm uppercase">Total Users</h2>
        <p class="text-3xl font-bold text-gray-800 mt-2"><?php echo $totalUsers?></p>
      </div>
      <div class="bg-blue-100 p-4 rounded-full">
        <i class="fa-solid fa-users text-blue-600 text-2xl"></i>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div>
        <h2 class="text-gray-500 text-sm uppercase">Active postings</h2>
        <p class="text-3xl font-bold text-gray-800 mt-2"><?php echo $activeInternships?></p>
      </div>
      <div class="bg-green-100 p-4 rounded-full">
        <i class="fa-solid fa-briefcase text-green-600 text-2xl"></i>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div>
        <h2 class="text-gray-500 text-sm uppercase">Students in Internships</h2>
        <p class="text-3xl font-bold text-gray-800 mt-2"><?php echo $studentsInInternships?></p>
      </div>
      <div class="bg-yellow-100 p-4 rounded-full">
        <i class="fa-solid fa-user-graduate text-yellow-600 text-2xl"></i>
      </div>
    </div>
  </div>

  <!-- Recent Internships Section -->
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Ongoing Postings</h2>

  <?php if (empty($internships)): ?>
      <p class="text-gray-600">No active internships available.</p>
  <?php else: ?>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <?php foreach ($internships as $job): ?>
      <div class="bg-white shadow-md rounded-xl p-6">

        <!-- Logo -->
        <div class="flex items-center mb-4">
          <?php if (!empty($job['company_logo'])): ?>
            <img src="../<?= htmlspecialchars($job['company_logo']) ?>" 
                 class="w-16 h-16 object-cover rounded-lg mr-4">
          <?php else: ?>
            <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
              <i class="fa-solid fa-building text-gray-500 text-xl"></i>
            </div>
          <?php endif; ?>

          <div>
            <h3 class="text-xl font-semibold text-gray-800"><?= htmlspecialchars($job['title']) ?></h3>
            <p class="text-gray-500"><?= htmlspecialchars($job['company_name']) ?></p>
          </div>
        </div>

        <!-- Details -->
        <p class="text-sm text-gray-600"><strong>Published:</strong> <?= htmlspecialchars(date("Y-m-d", strtotime($job['created_at']))) ?></p>
        <p class="text-sm text-gray-600"><strong>Deadline:</strong> <?= htmlspecialchars($job['deadline']) ?></p>
        <p class="text-sm text-gray-600"><strong>Applicants:</strong> <?= $job['applicant_count'] ?></p>
       <!-- Edit Button -->
        <a href="edit_internship.php?id=<?= $job['id'] ?>" 
           class="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold">
          Edit Internship
        </a>
      </div>
    <?php endforeach; ?>
  </div>
  <?php endif; ?>

  <!-- Users Section -->
  <div class="mt-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Look for Students</h2>
    
    <!-- Filter Buttons -->
    <div class="flex gap-4 mb-6">
      <button id="btn-interns" 
              class="filter-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
        Interns
      </button>
      <button id="btn-non-interns" 
              class="filter-btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow transition">
        Non Interns
      </button>
    </div>

    <!-- Scrollable Students Container -->
    <div class="bg-white shadow-md rounded-xl p-6">
      <div id="students-container" class="overflow-y-auto" style="max-height: 500px;">
        <div class="text-center text-gray-500 py-8">
          <i class="fa-solid fa-users text-4xl mb-4"></i>
          <p>Click on a button above to view students</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
let currentFilter = null;

// Button click handlers
document.getElementById('btn-interns').addEventListener('click', function() {
  loadStudents('interns');
  setActiveButton('btn-interns');
});

document.getElementById('btn-non-interns').addEventListener('click', function() {
  loadStudents('non-interns');
  setActiveButton('btn-non-interns');
});

function setActiveButton(activeId) {
  // Reset all buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'text-white');
    btn.classList.add('bg-gray-300', 'hover:bg-gray-400', 'text-gray-800');
  });
  
  // Set active button
  const activeBtn = document.getElementById(activeId);
  activeBtn.classList.remove('bg-gray-300', 'hover:bg-gray-400', 'text-gray-800');
  activeBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white');
}

function loadStudents(filter) {
  const container = document.getElementById('students-container');
  
  // Show loading state
  container.innerHTML = `
    <div class="text-center text-gray-500 py-8">
      <i class="fa-solid fa-spinner fa-spin text-4xl mb-4"></i>
      <p>Loading students...</p>
    </div>
  `;
  
  // Fetch students from API
  fetch(`../controllers/fetch_students.php?filter=${filter}`)
    .then(response => response.json())
    .then(data => {
      if (data.success && data.students.length > 0) {
        // Display students as a list
        let html = '<div class="space-y-2">';
        
        data.students.forEach(student => {
          const fullName = `${student.first_name} ${student.last_name}`;
          html += `
            <div class="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800">${escapeHtml(fullName)}</h3>
                <p class="text-sm text-gray-600 mt-1">${escapeHtml(student.degree || 'N/A')}</p>
              </div>
              <a href="view_student_profile.php?id=${student.id}" 
                 class="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap">
                <i class="fa-solid fa-eye mr-2"></i>View Profile
              </a>
            </div>
          `;
        });
        
        html += '</div>';
        container.innerHTML = html;
      } else {
        container.innerHTML = `
          <div class="text-center text-gray-500 py-8">
            <i class="fa-solid fa-users-slash text-4xl mb-4"></i>
            <p>No students found</p>
          </div>
        `;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      container.innerHTML = `
        <div class="text-center text-red-500 py-8">
          <i class="fa-solid fa-exclamation-triangle text-4xl mb-4"></i>
          <p>Error loading students. Please try again.</p>
        </div>
      `;
    });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Automatically load interns when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadStudents('interns');
  setActiveButton('btn-interns');
});
</script>

</body>
<!-- SweetAlert2 for Notifications -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    <?php if (!empty($expiringInternships) && !isset($_SESSION['notification_shown'])): ?>
        <?php $_SESSION['notification_shown'] = true; ?>
        document.addEventListener('DOMContentLoaded', function() {
            let expiringList = <?php echo json_encode($expiringInternships); ?>;
            let listHtml = '<ul style="text-align: left; margin-top: 10px;">';
            expiringList.forEach(item => {
                listHtml += `<li style="margin-bottom: 5px;">• <strong>${item.title}</strong><br><span style="font-size: 0.9em; color: #666;">Expires: ${item.deadline}</span></li>`;
            });
            listHtml += '</ul>';
            
            Swal.fire({
                title: '⚠️ Internship Expiration Alert',
                html: `The following internships are expiring within 2 days:<br>${listHtml}`,
                icon: 'warning',
                confirmButtonText: 'Got it',
                confirmButtonColor: '#2563eb'
            });
        });
    <?php endif; ?>
</script>
</html>

