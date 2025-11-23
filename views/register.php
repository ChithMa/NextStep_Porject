<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Registration</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

  <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
    <h2 class="text-2xl font-semibold text-center text-blue-600 mb-6">
      Student Registration Form
    </h2>
    <?php session_start();
      if (!empty($_SESSION['success'])) {
        echo "<div class='text-green-600'>".$_SESSION['success']."</div>";
        unset($_SESSION['success']);
      }
      if (!empty($_SESSION['error'])) {
        echo "<div class='text-red-600'>".$_SESSION['error']."</div>";
        unset($_SESSION['error']);
      }
      ?>
    <form action="../controllers/student_register.php" method="POST" enctype="multipart/form-data" class="space-y-6">
      <!-- CB Number -->
      <div>
        <label class="block text-sm font-medium text-gray-700">CB Number</label>
        <input type="text" name="cb_number" required
               class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
      </div>

      <!-- First Name / Last Name -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" name="first_name" required
                 class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" name="last_name" required
                 class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
        </div>
      </div>

      <!-- Contact Number -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Contact Number</label>
        <input type="tel" name="contact_number" required
               class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
      </div>

      <!-- Degree -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Degree</label>
        <select name="degree" required
                class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
          <option value="">Select Degree</option>
          <option value="BEng Software Engineering">BEng in Software Engineering</option>
          <option value="BSc Computer Science">BSc Computer Science</option>
          <option value="BSc Cybersecurity">BSc CyberSecurity</option>
        </select>
      </div>

      <!-- Degree Level -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Degree Level</label>
        <select name="degree_level" required
                class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
          <option value="">Select Degree Level</option>
          <option value="Level 5">Level 5</option>
          <option value="Level 6">Level 6</option>
        </select>
      </div>

      <!-- Availability -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Availability</label>
        <div class="flex items-center space-x-6">
          <label class="flex items-center">
            <input type="radio" name="availability" value="Full Time" required class="text-blue-500">
            <span class="ml-2">Full Time</span>
          </label>
          <label class="flex items-center">
            <input type="radio" name="availability" value="Part Time" required class="text-blue-500">
            <span class="ml-2">Part Time</span>
          </label>
        </div>
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" required
               class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
      </div>

      <!-- Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" name="password" required
               class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
      </div>

      <!-- Internship Preferences -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Preference 1</label>
          <select name="preference1" required
                  class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            <option value="">Select Option</option>
            <option value="Software Development">Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Preference 2</label>
          <select name="preference2"
                  class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            <option value="">Select Option</option>
            <option value="Software Development">Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Preference 3</label>
          <select name="preference3"
                  class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            <option value="">Select Option</option>
            <option value="Software Development">Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </div>
      </div>

      <!-- File Uploads -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Upload CV (PDF only)</label>
          <input type="file" name="cv_file" accept=".pdf" required
                 class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Profile Picture (Optional)</label>
          <input type="file" name="profile_picture" accept="image/*"
                 class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</body>
</html>
