<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link href="./src/output.css" rel="stylesheet">
</head>
<body class="min-h-screen flex flex-col bg-cover bg-center bg-fixed bg-no-repeat" style="background-image: url('assets/images/loginPic.jpg');">

  <!-- Main content container -->
  <div class="grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md border border-white/20">
      <!-- Logo at top of card -->
      <div class="flex justify-center mb-6">
        <img src="assets/images/logo.jpg" 
             alt="Company Logo" 
             class="h-32 sm:h-40 w-auto">
      </div>
      
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Login</h2>

      <?php
        session_start();
        if (!empty($_SESSION['error'])) {
            echo "<p class='text-red-300 bg-red-500/20 border border-red-400/30 rounded-lg p-3 text-center mb-4 text-sm'>" . htmlspecialchars($_SESSION['error']) . "</p>";
            unset($_SESSION['error']);
        }
        if (!empty($_SESSION['success'])) {
            echo "<p class='text-green-300 bg-green-500/20 border border-green-400/30 rounded-lg p-3 text-center mb-4 text-sm'>" . htmlspecialchars($_SESSION['success']) . "</p>";
            unset($_SESSION['success']);
        }
      ?>

      <form action="controllers/login_process.php" method="POST" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-white mb-2">Email</label>
          <input type="email" 
                 id="email" 
                 name="email" 
                 required
                 placeholder="Enter your email"
                 class="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none text-white placeholder-white/60">
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-white mb-2">Password</label>
          <input type="password" 
                 id="password" 
                 name="password" 
                 required
                 placeholder="Enter your password"
                 class="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none text-white placeholder-white/60">
        </div>

        <div class="text-center pt-2">
          <button type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Login
          </button>
        </div>
        
        <!-- Registration Link -->
        <p class="text-center text-sm text-white/90 mt-6">
          Don't have an account?
          <a href="views/register.php" class="text-blue-300 hover:text-blue-200 hover:underline font-medium">Register here</a>
        </p>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer class="py-4 text-center">
    <p class="text-white/80 text-xs sm:text-sm">
      &copy; <?php echo date('Y'); ?> All Rights Reserved
    </p>
  </footer>

</body>
</html>