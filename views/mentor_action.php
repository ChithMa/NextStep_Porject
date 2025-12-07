<?php
require_once '../config/db.php';

$token = $_GET['token'] ?? '';
$action = $_GET['action'] ?? '';

if (!$token) die("Invalid access link.");

// Find the review request
$stmt = $pdo->prepare("SELECT * FROM logbook_monthly_reviews WHERE approval_token = ?");
$stmt->execute([$token]);
$review = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$review) die("Invalid or expired token.");

// Handle Action
if ($action === 'approve' || $action === 'reject') {
    $newStatus = ($action === 'approve') ? 'approved' : 'rejected';
    
    // Update DB
    $stmt = $pdo->prepare("UPDATE logbook_monthly_reviews SET status = ?, mentor_action_date = CURDATE(), approval_token = NULL WHERE id = ?");
    $stmt->execute([$newStatus, $review['id']]);
    
    // Show Success Page
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Action Processed</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    </head>
    <body class="bg-gray-100 h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <?php if ($newStatus === 'approved'): ?>
                <i class="fa-solid fa-circle-check text-6xl text-green-500 mb-4"></i>
                <h1 class="text-2xl font-bold text-gray-800">Logbook Approved</h1>
                <p class="text-gray-600 mt-2">Thank you. The student has been notified of your approval.</p>
            <?php else: ?>
                <i class="fa-solid fa-circle-xmark text-6xl text-red-500 mb-4"></i>
                <h1 class="text-2xl font-bold text-gray-800">Logbook Rejected</h1>
                <p class="text-gray-600 mt-2">The student has been notified and asked to revise their entries.</p>
            <?php endif; ?>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// Fetch Student & Entries for Review
$stmtStudent = $pdo->prepare("SELECT * FROM students WHERE id = ?");
$stmtStudent->execute([$review['student_id']]);
$student = $stmtStudent->fetch(PDO::FETCH_ASSOC);

$stmtEntries = $pdo->prepare("SELECT * FROM logbook_entries WHERE student_id = ? AND month_number = ? ORDER BY week_number ASC");
$stmtEntries->execute([$review['student_id'], $review['month_number']]);
$entries = $stmtEntries->fetchAll(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Logbook - NXTStep</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body class="bg-gray-50 min-h-screen py-10 px-4">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        
        <script>
            // Check status if already processed (though token check in standard flow usually invalidates, 
            // the Logic above sets token=NULL on success so re-visit fails.)
        </script>

        <!-- Header -->
        <div class="bg-blue-600 p-6 text-white text-center">
            <h1 class="text-2xl font-bold">Logbook Approval Request</h1>
            <p class="text-blue-100">Month <?= $review['month_number'] ?> • <?= htmlspecialchars($student['first_name'] . ' ' . $student['last_name']) ?></p>
        </div>

        <div class="p-6">
            <p class="text-gray-600 mb-6 text-center">
                Please review the weekly activities below and approve or reject this month's logbook.
            </p>

            <div class="border rounded-lg overflow-hidden mb-8">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider">
                            <th class="p-3 border-b">Week</th>
                            <th class="p-3 border-b">Activities</th>
                            <th class="p-3 border-b">Technical Skills</th>
                            <th class="p-3 border-b">Soft Skills</th>
                            <th class="p-3 border-b">Trainings</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                        <?php foreach ($entries as $e): ?>
                        <tr>
                            <td class="p-3 font-semibold">Week <?= $e['week_number'] ?></td>
                            <td class="p-3"><?= nl2br(htmlspecialchars($e['activities'])) ?></td>
                            <td class="p-3"><?= nl2br(htmlspecialchars($e['technical_skills'])) ?></td>
                            <td class="p-3"><?= nl2br(htmlspecialchars($e['soft_skills'])) ?></td>
                            <td class="p-3"><?= nl2br(htmlspecialchars($e['trainings'])) ?></td>
                        </tr>
                        <?php endforeach; ?>
                        <?php if(empty($entries)): ?>
                        <tr><td colspan="5" class="p-4 text-center">No entries found.</td></tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
            
            <div class="flex justify-center gap-4">
                <a href="?token=<?= $token ?>&action=reject" onclick="return confirm('Are you sure you want to REJECT this logbook?')" 
                   class="bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 px-8 py-3 rounded-lg font-bold transition flex items-center">
                    <i class="fa-solid fa-xmark mr-2"></i> Reject
                </a>
                <a href="?token=<?= $token ?>&action=approve" onclick="return confirm('Are you sure you want to APPROVE this logbook?')" 
                   class="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-lg font-bold shadow-lg transition flex items-center">
                    <i class="fa-solid fa-check mr-2"></i> Approve Logbook
                </a>
            </div>
        </div>
    </div>
</body>
</html>
