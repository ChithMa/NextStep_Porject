<?php
session_start();
require_once "../config/db.php";
require_once "../includes/coordinatorheader.php";

// Verify login
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// Validate ID
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    $_SESSION['error'] = "Invalid internship selected.";
    header("Location: posting_history.php");
    exit;
}

$internship_id = (int)$_GET['id'];

// Fetch internship details with skills
$query = "
    SELECT i.*,
           GROUP_CONCAT(s.name SEPARATOR ', ') AS skills
    FROM internships i
    LEFT JOIN internship_skills isk ON i.id = isk.internship_id
    LEFT JOIN skills s ON isk.skill_id = s.id
    WHERE i.id = ?
    GROUP BY i.id
";
$stmt = $pdo->prepare($query);
$stmt->execute([$internship_id]);
$internship = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$internship) {
    $_SESSION['error'] = "Internship not found.";
    header("Location: coordinator_dashboard.php");
    exit;
}

// Fetch applicants
$applicantQuery = "
    SELECT 
        a.id,
        a.apply_type,
        a.cv AS custom_cv,
        st.first_name,
        st.last_name,
        st.contact_number,
        st.cv AS profile_cv,
        u.email,
        a.applied_at
    FROM applications a
    INNER JOIN students st ON a.student_id = st.id
    INNER JOIN users u ON st.user_id = u.id
    WHERE a.internship_id = ?
    ORDER BY a.applied_at DESC
";
$appStmt = $pdo->prepare($applicantQuery);
$appStmt->execute([$internship_id]);
$applicants = $appStmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internship Details</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100">

<!-- Main Container -->
<div class="max-w-6xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-xl">

    <!-- Back Button -->
    <a href="posting_history.php"
       class="text-blue-600 hover:text-blue-800 font-medium mb-5 inline-flex items-center">
        ← Back to Posting History
    </a>

    <!-- Flash Messages -->
    <?php if (isset($_SESSION['success'])): ?>
        <div class="bg-green-100 text-green-700 p-3 rounded mb-4">
            <?= $_SESSION['success']; ?>
        </div>
        <?php unset($_SESSION['success']); endif; ?>

    <?php if (isset($_SESSION['error'])): ?>
        <div class="bg-red-100 text-red-700 p-3 rounded mb-4">
            <?= $_SESSION['error']; ?>
        </div>
        <?php unset($_SESSION['error']); endif; ?>

    <!-- Internship Header -->
    <div class="flex items-center gap-6 mb-6">
        <?php if ($internship['company_logo']): ?>
            <img src="../<?= htmlspecialchars($internship['company_logo']) ?>"
                 class="w-24 h-24 object-cover rounded-lg shadow">
        <?php else: ?>
            <div class="w-24 h-24 bg-gray-300 rounded-lg"></div>
        <?php endif; ?>

        <div>
            <h1 class="text-3xl font-bold text-gray-800">
                <?= htmlspecialchars($internship['title']) ?>
            </h1>
            <p class="text-gray-600 text-lg">
                <?= htmlspecialchars($internship['company_name']) ?>
            </p>
            <p class="text-sm text-gray-500">
                Posted on <?= date("Y-m-d", strtotime($internship['created_at'])) ?>
            </p>
        </div>
    </div>

    <!-- Internship Details -->
    <div class="grid grid-cols-2 gap-4 mb-6">
        <p><strong>Location:</strong> <?= htmlspecialchars($internship['location']) ?></p>
        <p><strong>Type:</strong> <?= htmlspecialchars($internship['type']) ?></p>
        <p><strong>Stipend:</strong> <?= htmlspecialchars($internship['stipend']) ?></p>
        <p><strong>Duration:</strong> <?= htmlspecialchars($internship['duration']) ?></p>
        <p><strong>Employer Email:</strong> <?= htmlspecialchars($internship['employer_email']) ?></p>
        <p><strong>Deadline:</strong> <?= htmlspecialchars($internship['deadline']) ?></p>
    </div>

    <!-- Applicants Section -->
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Applicants</h2>

    <?php if (count($applicants) === 0): ?>
        <p class="text-gray-600 italic">No applicants have applied yet.</p>

    <?php else: ?>
        <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="p-3 border">Name</th>
                        <th class="p-3 border">Email</th>
                        <th class="p-3 border">Contact</th>
                        <th class="p-3 border">Applied</th>
                        <th class="p-3 border">CV</th>
                    </tr>
                </thead>

                <tbody>
                <?php foreach ($applicants as $student): ?>
                    <tr class="hover:bg-gray-50">
                        <td class="p-3 border">
                            <?= htmlspecialchars($student['first_name'] . " " . $student['last_name']) ?>
                        </td>

                        <td class="p-3 border"><?= htmlspecialchars($student['email']) ?></td>
                        <td class="p-3 border"><?= htmlspecialchars($student['contact_number']) ?></td>
                        <td class="p-3 border"><?= htmlspecialchars($student['applied_at']) ?></td>

                        <td class="p-3 border text-center">
                            <?php
                            $cvFile = ($student['apply_type'] === 'profile')
                                ? $student['profile_cv'] 
                                : $student['custom_cv'];
                            ?>

                            <?php if ($cvFile): ?>
                                <a href="../<?= htmlspecialchars($cvFile) ?>"
                                   class="text-blue-600 hover:underline" target="_blank">
                                    <?= $student['apply_type'] === 'profile' ? 'View Profile CV' : 'View Profile CV' ?>
                                </a>
                                <br>
                                <a href="../<?= htmlspecialchars($cvFile) ?>" download
                                   class="text-green-600 hover:underline text-sm">
                                    Download
                                </a>
                            <?php else: ?>
                                <span class="text-gray-500">No CV</span>
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endforeach; ?>
                </tbody>

            </table>
        </div>
    <?php endif; ?>

</div>

</body>
</html>
