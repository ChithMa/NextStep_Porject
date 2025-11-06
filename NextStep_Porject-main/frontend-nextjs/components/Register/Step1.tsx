"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "./RegisterContext";
import axios from "axios";

function Step1() {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("Step1 must be used within RegisterProvider");
  
  const { formData, setFormData } = context;
  const [error, setError] = useState("");
  const router = useRouter();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for personal info fields only
    if (
      !formData.studentID ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.contactNumber
    ) {
      setError("All fields are required");
      return;
    }

    // Student ID rule
    if (!formData.studentID.includes("C") || !formData.studentID.includes("B")) {
      setError("Student ID must include letters 'C' and 'B'");
      return;
    }
    
    // Contact number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.contactNumber)) {
      setError("Contact number must be exactly 10 digits.");
      return;
    }

    setError("");
    router.push("/register/step1-edu");
  };

  return (
    <div className="register-wrapper">
      {/* Header */}
      <div className="register-header">
        <div className="register-badge">NEXT STEP - STUDENT JOURNEY</div>
        <h1 className="register-main-title">
          Start your placement journey with confidence.
        </h1>
        <p className="register-subtitle">
          We will guide you through a few quick steps so coordinators can match the best opportunities to your strengths.
        </p>
        <p className="register-login-link">
          Already started? <a onClick={() => router.push("/")}>Return to login</a>
        </p>
      </div>

      {/* Registration Card */}
      <div className="register-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="step-label">STEP 1 OF 4</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '25%' }}></div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <div className="step-nav-item active">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="step-nav-label">Personal</span>
          </div>
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="step-nav-label">Education</span>
          </div>
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span className="step-nav-label">Preferences</span>
          </div>
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="step-nav-label">Documents</span>
          </div>
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <span className="step-nav-label">Photo</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="register-form-content">
          <h2 className="form-section-title">Personal Information</h2>
          <p className="form-section-subtitle">
            Let's start with your basic details and contact information.
          </p>

          <form onSubmit={handleNext}>
            <div className="form-grid">
              <div className="form-field full-width">
                <label htmlFor="studentID">Student ID</label>
                <input
                  id="studentID"
                  type="text"
                  placeholder="CB012345"
                  value={formData.studentID || ""}
                  onChange={(e) => setFormData({ ...formData, studentID: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName || ""}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName || ""}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  id="contactNumber"
                  type="tel"
                  placeholder="0771234567"
                  value={formData.contactNumber || ""}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                />
              </div>
            </div>

            {error && <div className="register-error">{error}</div>}

            <div className="form-actions">
              <button type="submit" className="btn-next">
                Continue to education
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1;
