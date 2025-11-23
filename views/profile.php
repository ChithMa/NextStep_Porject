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

// Fetch current preferences
$prefStmt = $pdo->prepare("SELECT preference_name FROM preferences WHERE student_id = ? ORDER BY id");
$prefStmt->execute([$student['id']]);
$currentPreferences = $prefStmt->fetchAll(PDO::FETCH_COLUMN);

// Available preference options
$preferenceOptions = ['Software Development', 'UI/UX Design', 'Data Analysis', 'Cyber Security'];
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

      <!-- Current Preferences Display -->
      <?php if (!empty($currentPreferences)): ?>
        <div class="w-full mt-4">
          <p class="text-sm font-semibold mb-2 text-blue-100"><i class="fa-solid fa-star mr-2"></i>Career Preferences</p>
          <div class="flex flex-wrap gap-2">
            <?php foreach ($currentPreferences as $pref): ?>
              <span class="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                <?= htmlspecialchars($pref) ?>
              </span>
            <?php endforeach; ?>
          </div>
        </div>
      <?php else: ?>
        <div class="w-full mt-4">
          <p class="text-sm font-semibold mb-2 text-blue-100"><i class="fa-solid fa-star mr-2"></i>Career Preferences</p>
          <p class="text-xs text-blue-200 italic">No preferences selected</p>
        </div>
      <?php endif; ?>

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

        <!-- Career Preferences -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Career Preferences</label>
          <p class="text-sm text-gray-500 mb-3">Select up to 3 preferences (no duplicates)</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm text-gray-600 mb-1">Preference 1</label>
              <select name="preference1" id="preference1" class="w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 preference-select">
                <option value="">Select Option</option>
                <?php foreach ($preferenceOptions as $option): ?>
                  <option value="<?= htmlspecialchars($option) ?>" 
                    <?= (isset($currentPreferences[0]) && $currentPreferences[0] === $option) ? 'selected' : '' ?>>
                    <?= htmlspecialchars($option) ?>
                  </option>
                <?php endforeach; ?>
              </select>
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Preference 2</label>
              <select name="preference2" id="preference2" class="w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 preference-select">
                <option value="">Select Option</option>
                <?php foreach ($preferenceOptions as $option): ?>
                  <option value="<?= htmlspecialchars($option) ?>" 
                    <?= (isset($currentPreferences[1]) && $currentPreferences[1] === $option) ? 'selected' : '' ?>>
                    <?= htmlspecialchars($option) ?>
                  </option>
                <?php endforeach; ?>
              </select>
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Preference 3</label>
              <select name="preference3" id="preference3" class="w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 preference-select">
                <option value="">Select Option</option>
                <?php foreach ($preferenceOptions as $option): ?>
                  <option value="<?= htmlspecialchars($option) ?>" 
                    <?= (isset($currentPreferences[2]) && $currentPreferences[2] === $option) ? 'selected' : '' ?>>
                    <?= htmlspecialchars($option) ?>
                  </option>
                <?php endforeach; ?>
              </select>
            </div>
          </div>
          <p id="preference-error" class="text-red-600 text-sm mt-2 hidden"></p>
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

  <script>
    // Prevent duplicate preference selections
    const preferenceSelects = document.querySelectorAll('.preference-select');
    const errorMsg = document.getElementById('preference-error');
    
    preferenceSelects.forEach((select, index) => {
      select.addEventListener('change', function() {
        const selectedValue = this.value;
        const otherSelects = Array.from(preferenceSelects).filter((_, i) => i !== index);
        
        // Clear error message
        errorMsg.classList.add('hidden');
        errorMsg.textContent = '';
        
        // If a value is selected, check for duplicates
        if (selectedValue !== '') {
          otherSelects.forEach(otherSelect => {
            if (otherSelect.value === selectedValue) {
              // Found duplicate - reset this select and show error
              this.value = '';
              errorMsg.textContent = 'Each preference must be unique. Please select a different option.';
              errorMsg.classList.remove('hidden');
              return;
            }
          });
        }
        
        // Update other selects to disable the selected option
        updateSelectOptions();
      });
    });
    
    function updateSelectOptions() {
      const selectedValues = Array.from(preferenceSelects).map(s => s.value).filter(v => v !== '');
      
      preferenceSelects.forEach(select => {
        const currentValue = select.value;
        Array.from(select.options).forEach(option => {
          if (option.value === '' || option.value === currentValue) {
            option.disabled = false;
          } else {
            option.disabled = selectedValues.includes(option.value) && currentValue !== option.value;
          }
        });
      });
    }
    
    // Initialize on page load
    updateSelectOptions();
    
    // Validate before form submission
    document.querySelector('form').addEventListener('submit', function(e) {
      const selectedValues = Array.from(preferenceSelects)
        .map(s => s.value)
        .filter(v => v !== '');
      
      // Check for duplicates
      if (selectedValues.length !== new Set(selectedValues).size) {
        e.preventDefault();
        errorMsg.textContent = 'Please ensure all selected preferences are unique.';
        errorMsg.classList.remove('hidden');
        return false;
      }
    });
  </script>

</body>
</html>
