# 🚀 Quick Start - Next.js Frontend

## Running the Application

### 1. Start the Backend (Required)
```bash
cd backend
npm install
npm start
```
✅ Backend running on: http://localhost:5000

### 2. Start the Next.js Frontend
```bash
cd frontend-nextjs
npm install
npm run dev
```
✅ Frontend running on: http://localhost:3000

---

## 🧪 Test Accounts

### Admin
- Email: `tharindu@apiit.lk`
- Password: `tharindu123`

### Coordinator
- Email: `nadeesha@apiit.lk`
- Password: `nadeesha123`

### Student
Register a new student account through the registration flow.

---

## 📋 Registration Flow Test

1. Go to http://localhost:3000
2. Click "Register here"
3. **Step 1:** Fill student information
   - Student ID: Must contain 'C' and 'B' (e.g., `CB012345`)
   - Email: Must match pattern `StudentID@students.apiit.lk`
   - Contact: 10 digits
4. **Step 2:** Select 3 internship preferences
5. **Step 3:** Upload CV (PDF, max 5MB)
6. **Step 4:** Upload profile picture (JPG/PNG, max 2MB)
7. Login with registered credentials

---

## 🎯 Key Routes

- `/` - Login page
- `/register/step1` - Registration start
- `/student-dashboard` - Student dashboard
- `/coordinator-dashboard` - Coordinator dashboard
- `/admin-dashboard` - Admin dashboard

---

## 🛠️ Development Commands

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📝 Important Notes

1. **Backend must be running** on port 5000
2. **MongoDB** must be connected (check backend `.env`)
3. File uploads go to `backend/uploads/` folder
4. All API calls automatically proxy to backend via Next.js rewrites

---

## 🐛 Common Issues

**Frontend won't start:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Backend connection error:**
- Ensure backend is running on port 5000
- Check `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:5000`

**File upload not working:**
- Check backend `uploads/` folder exists
- Ensure backend multer is configured correctly

---

## ✨ What's New in Next.js Version

✅ TypeScript for type safety
✅ App Router for better performance
✅ Improved developer experience
✅ Better build optimization
✅ Ready for production deployment

---

**Happy coding! 🎉**
