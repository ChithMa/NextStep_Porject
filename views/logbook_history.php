<?php
session_start();
require_once '../config/db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM students WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$student = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$student) exit("Student not found.");
$student_id = $student['id'];

// Fetch all monthly statuses
$stmt = $pdo->prepare("SELECT * FROM logbook_monthly_reviews WHERE student_id = ? ORDER BY month_number ASC");
$stmt->execute([$student_id]);
$reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Logbook History - NXTStep</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body class="bg-gray-50 min-h-screen">
    <?php include '../includes/header.php'; ?>
    
    <div class="container mx-auto px-6 py-10">
        <div class="flex items-center gap-4 mb-8">
            <a href="logbook.php" class="text-gray-500 hover:text-blue-600 transition">
                <i class="fa-solid fa-arrow-left text-xl"></i>
            </a>
            <h1 class="text-3xl font-bold text-gray-800">Logbook History</h1>
        </div>

        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                        <th class="p-4 font-semibold border-b">Month</th>
                        <th class="p-4 font-semibold border-b">Status</th>
                        <th class="p-4 font-semibold border-b">Submitted Date</th>
                        <th class="p-4 font-semibold border-b">Mentor Reviewed Date</th>
                    </tr>
                </thead>
                <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                    <?php if (empty($reviews)): ?>
                        <tr>
                            <td colspan="4" class="p-8 text-center text-gray-400 italic">No history available yet.</td>
                        </tr>
                    <?php else: ?>
                        <?php foreach ($reviews as $r): ?>
                            <tr class="hover:bg-gray-50 transition">
                                <td class="p-4 font-medium text-gray-800">
                                    Month <?= htmlspecialchars($r['month_number']) ?>
                                </td>
                                <td class="p-4">
                                    <?php
                                    $statusColor = 'bg-gray-100 text-gray-600';
                                    $icon = '';
                                    if ($r['status'] === 'submitted') {
                                        $statusColor = 'bg-yellow-100 text-yellow-700';
                                        $icon = '<i class="fa-solid fa-clock mr-1"></i>';
                                    } elseif ($r['status'] === 'approved') {
                                        $statusColor = 'bg-green-100 text-green-700';
                                        $icon = '<i class="fa-solid fa-check-circle mr-1"></i>';
                                    } elseif ($r['status'] === 'rejected') {
                                        $statusColor = 'bg-red-100 text-red-700';
                                        $icon = '<i class="fa-solid fa-circle-xmark mr-1"></i>';
                                    }
                                    ?>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium <?= $statusColor ?>">
                                        <?= $icon ?> <?= ucfirst($r['status']) ?>
                                    </span>
                                </td>
                                <td class="p-4"><?= htmlspecialchars($r['submitted_date']) ?></td>
                                <td class="p-4"><?= $r['mentor_action_date'] ? htmlspecialchars($r['mentor_action_date']) : '<span class="text-gray-400">-</span>' ?></td>
                            </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
