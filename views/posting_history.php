<?php
session_start();
require_once "../includes/coordinatorheader.php";
require_once "../config/db.php";

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// Fetch expired internships
$query = "
    SELECT i.*, 
           (SELECT COUNT(*) FROM applications a WHERE a.internship_id = i.id) AS applicant_count
    FROM internships i
    WHERE i.deadline < CURDATE()
    ORDER BY i.deadline DESC
";

$stmt = $pdo->query($query);
$expiredInternships = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Posting History</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen"> 
    <!-- Add pt-24 if header is fixed -->
    
    <div class="w-full bg-white shadow-sm p-8">

        <h1 class="text-3xl font-bold text-gray-800 mb-6">
            Internship Posting History
        </h1>

        <!-- Session Messages -->
        <?php if (isset($_SESSION['error'])): ?>
            <p class="bg-red-100 text-red-700 p-3 rounded mb-4">
                <?= $_SESSION['error']; unset($_SESSION['error']); ?>
            </p>
        <?php endif; ?>

        <?php if (isset($_SESSION['success'])): ?>
            <p class="bg-green-100 text-green-700 p-3 rounded mb-4">
                <?= $_SESSION['success']; unset($_SESSION['success']); ?>
            </p>
        <?php endif; ?>

        <!-- Full Width Table -->
        <div class="overflow-x-auto">
            <table class="w-full border border-gray-300 rounded-lg">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="p-3 border">Logo</th>
                        <th class="p-3 border">Title</th>
                        <th class="p-3 border">Company</th>
                        <th class="p-3 border">Published</th>
                        <th class="p-3 border">Deadline</th>
                        <th class="p-3 border">Applicants</th>
                        <th class="p-3 border">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <?php if (count($expiredInternships) === 0): ?>
                        <tr>
                            <td colspan="7" class="p-5 text-center text-gray-500">
                                No expired internships found.
                            </td>
                        </tr>
                    <?php endif; ?>

                    <?php foreach ($expiredInternships as $row): ?>
                        <tr class="hover:bg-gray-50">
                            <td class="p-3 border text-center">
                                <?php if ($row['company_logo']): ?>
                                    <img src="../<?= $row['company_logo']; ?>" 
                                        class="w-14 h-14 object-cover rounded">
                                <?php else: ?>
                                    <span class="text-gray-500">No Logo</span>
                                <?php endif; ?>
                            </td>

                            <td class="p-3 border font-semibold">
                                <?= htmlspecialchars($row['title']); ?>
                            </td>

                            <td class="p-3 border">
                                <?= htmlspecialchars($row['company_name']); ?>
                            </td>

                            <td class="p-3 border">
                                <?= date("Y-m-d", strtotime($row['created_at'])); ?>
                            </td>

                            <td class="p-3 border text-red-600 font-semibold">
                                <?= $row['deadline']; ?>
                            </td>

                            <td class="p-3 border text-center">
                                <?= $row['applicant_count']; ?>
                            </td>

                            <td class="p-3 border space-x-3 text-center">
                                <a href="view_internships.php?id=<?= $row['id']; ?>" 
                                   class="text-blue-600 hover:underline">View</a>

                                <a href="../controllers/download_applications.php?id=<?= $row['id']; ?>"
                                   class="text-green-600 hover:underline">Download</a>

                                <a href="../controllers/delete_internship.php?id=<?= $row['id']; ?>"
                                   onclick="return confirm('Are you sure you want to delete this internship?')"
                                   class="text-red-600 hover:underline">Delete</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>

            </table>
        </div>

    </div>

</body>
</html>
