import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Step1 from './components/Register/Step1';
import Step2 from './components/Register/Step2';
import Step3 from './components/Register/Step3';
import Step4 from './components/Register/Step4';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import CoordinatorDashboard from './components/Dashboard/CoordinatorDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { RegisterProvider } from "./components/Register/RegisterContext";


function App() {
  return (
    <RegisterProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register/step1" element={<Step1 />} />
        <Route path="/register/step2" element={<Step2 />} />
        <Route path="/register/step3" element={<Step3 />} />
        <Route path="/register/step4" element={<Step4 />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/coordinator-dashboard" element={<CoordinatorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
    </RegisterProvider>
  );
}

export default App;

