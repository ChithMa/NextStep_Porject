# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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

```console
git --version
```


Clone the repo and open it in VS Code:

```console
git clone https://github.com/ChithMa/NextStep_Porject.git
cd NextStep_Porject
code .

```
## Step 2: Set Up Database Connection

Make sure you have a MongoDB Atlas account.

In the backend folder, create a file named .env.

Add the following environment variables:

```markdown
MONGO_URI="mongodb+srv://NextStep:nextstep123@cluster0.wa3pqsi.mongodb.net/NextStep?retryWrites=true&w=majority"
PORT=5000
```

**Then send me your emails to Whatsapp**

This connects the backend to your MongoDB database.

## Step 3: Run the Backend

In your terminal:

```console
cd backend
npm install
npm start
```


Make sure to test the backend endpoints with Postman before working on the frontend.

## Step 4: Run the Frontend

In another terminal:

```console
cd frontend
npm install
npm start
```


Your frontend should now be running, connected to the backend.

## 🧑‍💻 Working with GitHub

Follow these steps to safely collaborate with your team:

1️⃣** Pull the Latest Updates First**

Before you start coding:

```console
git pull origin main
```


This ensures your local branch is up-to-date.

2️⃣ **Make Your Changes**

Edit files, fix bugs, or add new features.

3️⃣ **Check Your Changes**

```console
git status
git diff
```

Review what you’ve modified before committing.

4️⃣ **Add and Commit Changes**

```console
git add .
git commit -m "Describe your changes here"
```

5️⃣ **Pull Again Before Pushing**

This prevents merge conflicts if others have pushed updates:

```console
git pull origin main
```


If no one else has pushed, it will say: Already up to date.

If there are new changes, Git will merge automatically or prompt you to resolve conflicts.

6️⃣ **Push Your Changes**

Finally, push your updates to GitHub:

```console
git push origin main
```