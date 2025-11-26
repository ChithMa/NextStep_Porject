# 🛠️ How to Run the Project

Before starting, make sure you have the following installed on your system:

## ✔ Required Software

- XAMPP
- Git
- Node.js

## ✔ Verify Installations

Open Command Prompt (CMD) and run:

```bash
git --version
npm --version
```

## ✅ Step-by-Step Guide to Run the Project

### 1️⃣ Step 1 – Move Project to htdocs

Copy your project folder and paste it inside:

`C:\xampp\htdocs\`

### 2️⃣ Step 2 – Open the Project in VS Code

Open Visual Studio Code, then open the project folder.

### 3️⃣ Step 3 – Install Tailwind Dependencies

In VS Code terminal, run:

```bash
npm install
npm run dev
```

This will build Tailwind CSS properly.

### 4️⃣ Step 4 – Start XAMPP Services

Open the XAMPP Control Panel. Click Start for:

- Apache
- MySQL

### 5️⃣ Step 5 – Open phpMyAdmin

In XAMPP Control Panel, click Admin next to MySQL.
This will open phpMyAdmin in your browser.

### 6️⃣ Step 6 – Create the Database

In phpMyAdmin:

1. Click New
2. Create a database named `nextstep` (all lowercase)

### 7️⃣ Step 7 – Import the SQL File

1. Select the `nextstep` database
2. Go to Import
3. Choose the `.sql` file included in the project
4. Click Go

### 8️⃣ Step 8 – Run the Project

Use this format in your browser:

`http://localhost/ProjectFolderName/login.php`

➡ Replace `ProjectFolderName` with your actual project folder name in htdocs.

## 🎓 Test Credentials

Coordinator Login

Use the following credentials to log in as the Coordinator:

**Email**:    nadeesha@apiit.lk
**Password**: coord123

Student Login

To log in as a Student, you must first register using the registration form.

➡ On the login page, click the “Register here” link
➡ Fill the details along with your CV and create your student account
➡ After registration, you can log in using your new credentials


