# NextStep - Internship Management Platform

A MERN stack project for managing internships, including student registration, dashboards, and document management.

🛠 Tech Stack

MongoDB – Database

Express.js – Backend framework
React.js – Frontend framework
Node.js – Runtime environment

🚀 Getting Started

Follow these steps to run the project locally.

## Step 1: Clone the Repository

**Make sure you have Git installed. Check by running:**

`git --version`


Clone the repo and open it in VS Code:


```bash
git clone https://github.com/ChithMa/NextStep_Porject.git
cd NextStep_Porject
code .
```

## Step 2: Install Node.Js if not

**Make sure you have Node.js installed. Check by running:**

`node -v`
`npm -v`

## Step 3: Set Up Database Connection

Make sure you have a MongoDB Atlas account.

In the backend folder, create a file named .env.

Add the following environment variables:

```bash
MONGO_URI="mongodb+srv://NextStep:nextstep123@cluster0.wa3pqsi.mongodb.net/NextStep?retryWrites=true&w=majority"
PORT=5000
```

**Then send me your emails to Whatsapp**

This connects the backend to your MongoDB database.

## Step 4: Run the Backend

In your terminal:


```bash
cd backend
npm install
npm start

```

Make sure to test the backend endpoints with Postman before working on the frontend.

## Step 5: Run the Frontend

In another terminal:


```bash
cd frontend
npm install
npm start
```



Your frontend should now be running, connected to the backend.

## 🧑‍💻 Working with GitHub

Follow these steps to safely collaborate with your team:

1️⃣** Pull the Latest Updates First**

Before you start coding:

```bash
git pull origin main
```


This ensures your local branch is up-to-date.

2️⃣ **Make Your Changes**

Edit files, fix bugs, or add new features.

3️⃣ **Check Your Changes**

```bash
git status
git diff
```

Review what you’ve modified before committing.

4️⃣ **Add and Commit Changes**

```bash
git add .
git commit -m "Describe your changes here"
```

5️⃣ **Pull Again Before Pushing**

This prevents merge conflicts if others have pushed updates:

```bash
git pull origin main
```


If no one else has pushed, it will say: Already up to date.

If there are new changes, Git will merge automatically or prompt you to resolve conflicts.

6️⃣ **Push Your Changes**

Finally, push your updates to GitHub:

```bash
git push origin main
```
