<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Registration</title>
  <link href="../src/output.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700">

  <div class="min-h-screen flex flex-col">
    <!-- Header Card -->
    <div class="bg-white/95 backdrop-blur-sm shadow-lg p-6 sm:p-8">
      <div class="text-center">
        <div class="inline-block p-3 bg-blue-100 rounded-full mb-4">
          <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Student Registration</h1>
        <p class="text-gray-600 text-sm sm:text-base">Fill in your details to create your account</p>
      </div>

      <?php session_start();
        if (!empty($_SESSION['success'])) {
          echo "<div class='mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-lg'>" . htmlspecialchars($_SESSION['success']) . "</div>";
          unset($_SESSION['success']);
        }
        if (!empty($_SESSION['error'])) {
          echo "<div class='mt-6 p-4 bg-red-50 border-l-4 border-red-700 text-red-700 rounded-lg'>" . htmlspecialchars($_SESSION['error']) . "</div>";
          unset($_SESSION['error']);
        }
      ?>
    </div>

    <!-- Form Card -->
    <div class="flex-1 bg-white/95 backdrop-blur-sm shadow-lg p-6 sm:p-8 lg:p-10 overflow-y-auto">
      <div class="max-w-6xl mx-auto">
      <form action="../controllers/student_register.php" method="POST" enctype="multipart/form-data" class="space-y-6">
        
        <!-- Personal Information Section -->
        <div class="border-b border-gray-200 pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Personal Information
          </h2>
          
          <div class="space-y-4">
            <!-- CB Number -->
            <div>
              <label for="cb_number" class="block text-sm font-medium text-gray-700 mb-2">CB Number <span class="text-red-500">*</span></label>
              <input type="text" 
                     id="cb_number" 
                     name="cb_number" 
                     required 
                     placeholder="Enter your CB number"
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
            </div>

            <!-- First Name / Last Name -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="first_name" class="block text-sm font-medium text-gray-700 mb-2">First Name <span class="text-red-500">*</span></label>
                <input type="text" 
                       id="first_name" 
                       name="first_name" 
                       required 
                       placeholder="Enter first name"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
              </div>
              <div>
                <label for="last_name" class="block text-sm font-medium text-gray-700 mb-2">Last Name <span class="text-red-500">*</span></label>
                <input type="text" 
                       id="last_name" 
                       name="last_name" 
                       required 
                       placeholder="Enter last name"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
              </div>
            </div>

            <!-- Contact Number -->
            <div>
              <label for="contact_number" class="block text-sm font-medium text-gray-700 mb-2">Contact Number <span class="text-red-500">*</span></label>
              <input type="tel" 
                     id="contact_number" 
                     name="contact_number" 
                     required 
                     placeholder="+94 XX XXX XXXX"
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
            </div>
          </div>
        </div>

        <!-- Academic Information Section -->
        <div class="border-b border-gray-200 pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Academic Details
          </h2>
          
          <div class="space-y-4">
            <!-- Degree -->
            <div>
              <label for="degree" class="block text-sm font-medium text-gray-700 mb-2">Degree Program <span class="text-red-500">*</span></label>
              <select id="degree" 
                      name="degree" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white">
                <option value="">Select your degree</option>
                <option value="BEng Software Engineering">BEng in Software Engineering</option>
                <option value="BSc Computer Science">BSc Computer Science</option>
                <option value="BSc Cybersecurity">BSc CyberSecurity</option>
              </select>
            </div>

            <!-- Degree Level & Availability -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="degree_level" class="block text-sm font-medium text-gray-700 mb-2">Degree Level <span class="text-red-500">*</span></label>
                <select id="degree_level" 
                        name="degree_level" 
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white">
                  <option value="">Select level</option>
                  <option value="Level 5">Level 5</option>
                  <option value="Level 6">Level 6</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Availability <span class="text-red-500">*</span></label>
                <div class="flex items-center space-x-6 h-12">
                  <label class="flex items-center cursor-pointer">
                    <input type="radio" 
                           name="availability" 
                           value="Full Time" 
                           required 
                           class="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500">
                    <span class="ml-2 text-gray-700">Full Time</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input type="radio" 
                           name="availability" 
                           value="Part Time" 
                           required 
                           class="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500">
                    <span class="ml-2 text-gray-700">Part Time</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Information Section -->
        <div class="border-b border-gray-200 pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Account Credentials
          </h2>
          
          <div class="space-y-4">
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address <span class="text-red-500">*</span></label>
              <input type="email" 
                     id="email" 
                     name="email" 
                     required 
                     placeholder="your.email@example.com"
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password <span class="text-red-500">*</span></label>
              <input type="password" 
                     id="password" 
                     name="password" 
                     required 
                     placeholder="Create a strong password"
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
              <p class="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
            </div>
          </div>
        </div>

        <!-- Internship Preferences Section -->
        <div class="border-b border-gray-200 pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Internship Preferences
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="preference1" class="block text-sm font-medium text-gray-700 mb-2">1st Preference <span class="text-red-500">*</span></label>
              <select id="preference1" 
                      name="preference1" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white">
                <option value="">Select option</option>
                <option value="Software Development">Software Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>
            <div>
              <label for="preference2" class="block text-sm font-medium text-gray-700 mb-2">2nd Preference</label>
              <select id="preference2" 
                      name="preference2"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white">
                <option value="">Select option</option>
                <option value="Software Development">Software Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>
            <div>
              <label for="preference3" class="block text-sm font-medium text-gray-700 mb-2">3rd Preference</label>
              <select id="preference3" 
                      name="preference3"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white">
                <option value="">Select option</option>
                <option value="Software Development">Software Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Document Upload Section -->
        <div class="pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Documents
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="cv_file" class="block text-sm font-medium text-gray-700 mb-2">Upload CV (PDF only) <span class="text-red-500">*</span></label>
              <div class="relative">
                <input type="file" 
                       id="cv_file" 
                       name="cv_file" 
                       accept=".pdf" 
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 file:cursor-pointer">
              </div>
              <p class="mt-1 text-xs text-gray-500">Maximum file size: 5MB</p>
            </div>
            <div>
              <label for="profile_picture" class="block text-sm font-medium text-gray-700 mb-2">Profile Picture (Optional)</label>
              <div class="relative">
                <input type="file" 
                       id="profile_picture" 
                       name="profile_picture" 
                       accept="image/*"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 file:cursor-pointer">
              </div>
              <p class="mt-1 text-xs text-gray-500">JPG, PNG or GIF (max 2MB)</p>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-6">
          <button type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300">
            Complete Registration
          </button>
          <p class="text-center text-sm text-gray-600 mt-4">
            Already have an account? 
            <a href="../login.php" class="text-blue-600 hover:text-blue-800 font-medium">Login here</a>
          </p>
        </div>
      </form>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-white/95 backdrop-blur-sm text-center py-4">
      <p class="text-gray-700 text-sm">
        &copy; <?php echo date('Y'); ?> All Rights Reserved
      </p>
    </div>
  </div>

</body>
</html>