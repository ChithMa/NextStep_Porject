<?php
session_start();
require_once "../config/db.php";
require_once "../includes/coordinatorheader.php";

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'coordinator') {
    header("Location: ../login.php");
    exit;
}

// Validate internship ID
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    $_SESSION['error'] = "Invalid internship ID.";
    header("Location: coordinator_dashboard.php");
    exit;
}

$internship_id = intval($_GET['id']);

// Fetch internship details
$stmt = $pdo->prepare("SELECT * FROM internships WHERE id = ?");
$stmt->execute([$internship_id]);
$internship = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$internship) {
    $_SESSION['error'] = "Internship not found.";
    header("Location: coordinator_dashboard.php");
    exit;
}

// Fetch all predefined skills
$skillStmt = $pdo->query("SELECT * FROM skills ORDER BY name ASC");
$allSkills = $skillStmt->fetchAll(PDO::FETCH_ASSOC);

// Fetch selected skills for this internship
$selectedSkillStmt = $pdo->prepare("
    SELECT skill_id FROM internship_skills WHERE internship_id = ?
");
$selectedSkillStmt->execute([$internship_id]);
$selectedSkills = array_column($selectedSkillStmt->fetchAll(PDO::FETCH_ASSOC), "skill_id");
?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Edit Internship</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">

<!-- ===== PAGE HEADER ===== -->
<div class="bg-white border-b shadow-sm px-10 py-5 sticky top-0 z-50">
    <h1 class="text-3xl font-bold text-blue-700">Edit Internship</h1>
    <p class="text-gray-500 mt-1">Update internship details and requirements</p>
</div>

<!-- ===== MAIN CONTENT ===== -->
<div class="px-10 py-8 space-y-10">

    <!-- SESSION MESSAGES -->
    <?php if (isset($_SESSION['error'])): ?>
        <div class="bg-red-100 text-red-700 p-3 rounded border border-red-300">
            <?php echo $_SESSION['error']; unset($_SESSION['error']); ?>
        </div>
    <?php endif; ?>

    <?php if (isset($_SESSION['success'])): ?>
        <div class="bg-green-100 text-green-700 p-3 rounded border border-green-300">
            <?php echo $_SESSION['success']; unset($_SESSION['success']); ?>
        </div>
    <?php endif; ?>

    <form action="../controllers/edit_internship_process.php" 
          method="POST" enctype="multipart/form-data" 
          class="space-y-12">

        <input type="hidden" name="id" value="<?= $internship['id']; ?>">

        <!-- SECTION: BASIC INFO -->
        <section>
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Basic Information</h2>
            <div class="grid grid-cols-2 gap-6">

                <div>
                    <label class="font-semibold">Title</label>
                    <input type="text" name="title"
                           value="<?= htmlspecialchars($internship['title']); ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

                <div>
                    <label class="font-semibold">Company Name</label>
                    <input type="text" name="company_name"
                           value="<?= htmlspecialchars($internship['company_name']); ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

                <div class="col-span-2">
                    <label class="font-semibold">Company Website</label>
                    <input type="text" name="website"
                           value="<?= htmlspecialchars($internship['website']); ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

            </div>
        </section>

        <!-- SECTION: LOGO -->
        <section>
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Company Logo</h2>

            <?php if ($internship['company_logo']): ?>
                <img src="../<?= $internship['company_logo']; ?>" width="120" class="mb-2 rounded shadow">
            <?php endif; ?>

            <input type="file" name="company_logo" accept="image/*"
                   class="border p-2 rounded w-1/2">
            <p class="text-sm text-gray-500 mt-1">Leave empty to keep existing logo.</p>
        </section>

        <!-- SECTION: INTERNSHIP DETAILS -->
        <section>
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Internship Details</h2>

            <div class="grid grid-cols-2 gap-6">

                <div>
                    <label class="font-semibold">Location</label>
                    <input type="text" name="location"
                           value="<?= htmlspecialchars($internship['location']); ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

                <div>
                    <label class="font-semibold">Type</label>
                    <select name="type" class="w-full border p-2 rounded mt-1">
                        <option <?= $internship['type']=="On-site" ? "selected" : "" ?>>On-site</option>
                        <option <?= $internship['type']=="Remote" ? "selected" : "" ?>>Remote</option>
                        <option <?= $internship['type']=="Hybrid" ? "selected" : "" ?>>Hybrid</option>
                    </select>
                </div>

                <div>
                    <label class="font-semibold">Duration</label>
                    <input type="text" name="duration"
                           value="<?= htmlspecialchars($internship['duration']); ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

                <div>
                    <label class="font-semibold">Employer Email</label>
                    <input type="email" name="employer_email"
                           value="<?= htmlspecialchars($internship['employer_email']); ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

                <div>
                    <label class="font-semibold">Deadline</label>
                    <input type="date" name="deadline"
                           value="<?= $internship['deadline']; ?>"
                           class="w-full border p-2 rounded mt-1">
                </div>

                <div>
                    <label class="font-semibold">Stipend</label>
                    <div class="mt-2">
                        <label><input type="radio" name="stipend" value="Paid" 
                            <?= $internship['stipend']=="Paid" ? "checked" : "" ?>> Paid</label>
                        <label class="ml-6">
                            <input type="radio" name="stipend" value="Unpaid" 
                            <?= $internship['stipend']=="Unpaid" ? "checked" : "" ?>> Unpaid
                        </label>
                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION: DESCRIPTION -->
        <section>
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Description</h2>
            <textarea name="description" class="w-full border p-3 rounded h-32"><?= htmlspecialchars($internship['description']); ?></textarea>
        </section>

        <!-- SECTION: RESPONSIBILITIES -->
        <section>
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Responsibilities</h2>
            <textarea name="responsibilities" class="w-full border p-3 rounded h-32"><?= htmlspecialchars($internship['responsibilities']); ?></textarea>
        </section>

        <!-- Skills -->
        <div>
        <label class="font-semibold text-gray-700 text-lg">Required Skills</label>

        <div class="flex flex-wrap gap-3 mt-3">

            <?php foreach ($allSkills as $skill): ?>
            <label class="cursor-pointer">
                <input 
                type="checkbox" 
                name="skills[]"
                value="<?= $skill['id'] ?>"
                class="peer hidden"
                <?php if (in_array($skill['id'], $selectedSkills)) echo 'checked'; ?>
                >

                <span class="
                px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm 
                peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 
                hover:bg-blue-100 transition
                ">
                <?= htmlspecialchars($skill['name']) ?>
                </span>
            </label>
            <?php endforeach; ?>

        </div>
        </div>

        <!-- SUBMIT BUTTON -->
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            Save Changes
        </button>

    </form>
</div>

</body>

</body>
</html>
