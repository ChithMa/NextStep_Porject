# Migration Guide: React (CRA) → Next.js

## ✅ Migration Complete!

Your NextStep frontend has been successfully migrated from Create React App to Next.js 16 with App Router.

---

## 📂 What Was Migrated

### ✅ Components
All React components have been converted to TypeScript and updated for Next.js:

- ✅ `Login.tsx` - Login page with authentication
- ✅ `Step1.tsx` - Registration step 1 (Student info)
- ✅ `Step2.tsx` - Registration step 2 (Internship preferences)
- ✅ `Step3.tsx` - Registration step 3 (CV upload)
- ✅ `Step4.tsx` - Registration step 4 (Profile picture upload)
- ✅ `StudentDashboard.tsx`
- ✅ `CoordinatorDashboard.tsx`
- ✅ `AdminDashboard.tsx`
- ✅ `RegisterContext.tsx` - Context provider for registration flow

### ✅ Routes
File-based routing using Next.js App Router:

```
/ → Login page
/register/step1 → Registration step 1
/register/step2 → Registration step 2
/register/step3 → Registration step 3
/register/step4 → Registration step 4
/student-dashboard → Student dashboard
/coordinator-dashboard → Coordinator dashboard
/admin-dashboard → Admin dashboard
```

### ✅ Styling
- ✅ `form.css` - All custom form styles preserved
- ✅ Tailwind CSS integrated
- ✅ Global styles configured

### ✅ Assets
- ✅ `favicon.ico`
- ✅ `logo192.png`
- ✅ `logo512.png`

---

## 🔄 Key Differences from React (CRA)

### 1. Routing
**Before (React Router):**
```jsx
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/register/step2");
```

**After (Next.js):**
```jsx
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/register/step2");
```

### 2. Client Components
All interactive components now have `"use client"` at the top:
```tsx
"use client";

import React from "react";
// ... rest of component
```

### 3. File Organization
**Before:**
```
src/
  components/
  App.js
```

**After:**
```
app/              # Routes (pages)
components/       # Reusable components
```

### 4. Environment Variables
**Before:** `.env` file
```
REACT_APP_API_URL=http://localhost:5000
```

**After:** `.env.local` file
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 5. TypeScript
All components now use TypeScript for better type safety and developer experience.

---

## 🚀 How to Run

### Option 1: Run Next.js (New)
```bash
cd frontend-nextjs
npm install
npm run dev
```
Open: http://localhost:3000

### Option 2: Run Old React App (Still available)
```bash
cd frontend
npm install
npm start
```
Open: http://localhost:3000

---

## 🔧 Configuration Files

### `next.config.ts`
Configured with API rewrites to proxy backend requests:
```typescript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'http://localhost:5000/api/:path*',
    },
  ];
}
```

### `.env.local`
Environment variables for Next.js:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## ✨ New Features Available with Next.js

Now that you're on Next.js, you can leverage:

1. **Server-Side Rendering (SSR)** - For better SEO and performance
2. **Server Components** - Reduce JavaScript bundle size
3. **API Routes** - Build backend endpoints directly in Next.js
4. **Image Optimization** - Automatic image optimization with `next/image`
5. **Better Performance** - Automatic code splitting and optimization
6. **TypeScript** - Full type safety out of the box

---

## 📊 Comparison

| Feature | React (CRA) | Next.js |
|---------|------------|---------|
| **Routing** | React Router | File-based App Router |
| **Rendering** | Client-side only | SSR, SSG, Client |
| **TypeScript** | Manual setup | Built-in |
| **Bundle Size** | Larger | Optimized |
| **Performance** | Good | Excellent |
| **SEO** | Limited | Excellent |
| **Dev Experience** | Good | Excellent |

---

## 🎯 Next Steps

### Immediate Actions:
1. ✅ Test the application thoroughly
2. ✅ Run backend server: `cd backend && npm start`
3. ✅ Run Next.js frontend: `cd frontend-nextjs && npm run dev`
4. ✅ Test all routes and functionality

### Future Enhancements:
1. **Add Server Components** - Move non-interactive parts to server components
2. **Implement Middleware** - Add authentication middleware
3. **Optimize Images** - Use `next/image` for logo/profile pictures
4. **Add API Routes** - Move some backend logic to Next.js API routes
5. **Implement Server Actions** - Replace some API calls with server actions
6. **Add Metadata** - SEO optimization per page
7. **Error Boundaries** - Better error handling
8. **Loading States** - Add loading.tsx files for better UX

---

## 🐛 Troubleshooting

### Issue: "Cannot use import statement outside a module"
**Solution:** Make sure component has `"use client"` directive

### Issue: "useRouter is not defined"
**Solution:** Import from `next/navigation`, not `next/router`:
```tsx
import { useRouter } from "next/navigation";
```

### Issue: Backend API not connecting
**Solution:** 
1. Ensure backend is running on port 5000
2. Check `.env.local` has correct API URL
3. Verify `next.config.ts` rewrites are correct

### Issue: CSS not loading
**Solution:** Make sure `form.css` is imported in `globals.css`

---

## 📝 Maintenance

### Both Frontends Coexist
You now have two frontend versions:
- **`frontend/`** - Original React (CRA) version
- **`frontend-nextjs/`** - New Next.js version

You can:
- Keep both for comparison
- Run them side-by-side during transition
- Eventually remove the old `frontend/` folder once fully migrated

### Recommended Workflow
1. Test Next.js version thoroughly
2. Get team comfortable with Next.js
3. Deploy Next.js version to production
4. Archive/remove old React version

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering)
- [TypeScript in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

---

## ✅ Migration Checklist

- [x] Create new Next.js project
- [x] Migrate all components to TypeScript
- [x] Convert React Router to App Router
- [x] Update navigation hooks
- [x] Add "use client" directives
- [x] Migrate context providers
- [x] Copy and configure styles
- [x] Copy public assets
- [x] Configure environment variables
- [x] Set up API rewrites
- [x] Test build compilation
- [x] Create documentation

---

## 🎉 Congratulations!

Your NextStep project is now running on Next.js 16 with modern React patterns, TypeScript, and the App Router. Enjoy the improved developer experience and performance!

For questions or issues, refer to the Next.js documentation or create an issue in your project repository.
