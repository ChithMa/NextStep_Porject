<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

  <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
    <h2 class="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>

    <?php
      session_start();
      if (!empty($_SESSION['error'])) {
          echo "<p class='text-red-500 text-center mb-4'>" . $_SESSION['error'] . "</p>";
          unset($_SESSION['error']);
      }
      if (!empty($_SESSION['success'])) {
          echo "<p class='text-green-500 text-center mb-4'>" . $_SESSION['success'] . "</p>";
          unset($_SESSION['success']);
      }
    ?>

    <form action="controllers/login_process.php" method="POST" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" required
               class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" name="password" required
               class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
      </div>

      <div class="text-center">
        <button type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
          Login
        </button>
      </div>
      <!-- Registration Link -->
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <a href="views/register.php" class="text-blue-600 hover:underline font-medium">Register here</a>
      </p>
    </form>
  </div>
</body>
</html>
