# NextStep - Next.js Frontend

This is the Next.js migration of the NextStep Internship Management Platform frontend.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Context API** - State management for registration flow

## 📁 Project Structure

```
frontend-nextjs/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with RegisterProvider
│   ├── page.tsx                 # Home page (Login)
│   ├── register/
│   │   ├── step1/page.tsx      # Registration step 1
│   │   ├── step2/page.tsx      # Registration step 2
│   │   ├── step3/page.tsx      # Registration step 3
│   │   └── step4/page.tsx      # Registration step 4
│   ├── student-dashboard/page.tsx
│   ├── coordinator-dashboard/page.tsx
│   └── admin-dashboard/page.tsx
├── components/                   # Reusable components
│   ├── Login.tsx
│   ├── Register/
│   │   ├── RegisterContext.tsx  # Context for multi-step form
│   │   ├── Step1.tsx
│   │   ├── Step2.tsx
│   │   ├── Step3.tsx
│   │   └── Step4.tsx
│   └── Dashboard/
│       ├── StudentDashboard.tsx
│       ├── CoordinatorDashboard.tsx
│       └── AdminDashboard.tsx
├── styles/
│   └── form.css                 # Custom form styles
├── public/                      # Static assets
├── .env.local                   # Environment variables
└── next.config.ts              # Next.js configuration
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Backend server running on `http://localhost:5000`

### Installation

1. **Navigate to the Next.js frontend directory:**
   ```bash
   cd frontend-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   The `.env.local` file should already exist with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🔄 Migration from Create React App

This project was migrated from Create React App to Next.js with the following changes:

### Key Changes

1. **Routing:** React Router → Next.js App Router (file-based routing)
2. **Components:** Added `"use client"` directive to interactive components
3. **Navigation:** `useNavigate()` → `useRouter()` from `next/navigation`
4. **State Management:** React Context works the same way but wrapped in RootLayout
5. **TypeScript:** Migrated all components to TypeScript for better type safety
6. **API Calls:** Added API rewrites in `next.config.ts` for backend proxy

### Component Mapping

| Old Route (React Router) | New Route (Next.js) |
|-------------------------|---------------------|
| `/` | `/` (Login page) |
| `/register/step1` | `/register/step1` |
| `/register/step2` | `/register/step2` |
| `/register/step3` | `/register/step3` |
| `/register/step4` | `/register/step4` |
| `/student-dashboard` | `/student-dashboard` |
| `/coordinator-dashboard` | `/coordinator-dashboard` |
| `/admin-dashboard` | `/admin-dashboard` |

## 📝 Features

### Authentication
- Login with email/password
- Role-based routing (Student, Coordinator, Admin)
- JWT token storage in localStorage

### Student Registration (4-Step Process)
1. **Step 1:** Basic information (ID, name, email, password, programme, level, availability)
2. **Step 2:** Internship preferences (3 selections)
3. **Step 3:** CV upload (PDF only, max 5MB)
4. **Step 4:** Profile picture upload (JPG/PNG only, max 2MB)

### Validation Rules
- Student ID must contain 'C' and 'B'
- Email format: `StudentID@students.apiit.lk`
- Contact number: exactly 10 digits
- All fields required in each step
- Duplicate email/student ID checking

### Dashboards
- Student Dashboard
- Coordinator Dashboard  
- Admin Dashboard

## 🔧 Available Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🔗 Backend Integration

The frontend communicates with the Express backend on port 5000:

- **Login:** `POST /api/auth/login`
- **Register:** `POST /api/auth/register`
- **Check Duplicates:** `POST /api/auth/check-duplicates`

API calls are proxied through Next.js rewrites configured in `next.config.ts`.

## 🎨 Styling

- **Tailwind CSS** for utility classes
- **Custom CSS** in `styles/form.css` for form components
- Responsive design with mobile-first approach

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

Follow the same Git workflow as the main project:

1. Pull latest changes
2. Make your changes
3. Test thoroughly
4. Commit and push

