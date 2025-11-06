"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "./RegisterContext";
import axios from "axios";

function Step1Edu() {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("Step1Edu must be used within RegisterProvider");
  
  const { formData, setFormData } = context;
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for education and account fields
    if (
      !formData.degreeProgramme ||
      !formData.level ||
      !formData.availability ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Password strength validation
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Email rule
    const emailRegex = new RegExp(`${formData.studentID}@students\\.apiit\\.lk$`);
    if (!emailRegex.test(formData.email)) {
      setError("Email must match format: StudentID@students.apiit.lk");
      return;
    }

    // Duplicate check (backend)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/check-duplicates", {
        studentID: formData.studentID,
        email: formData.email,
      });

      if (res.data.exists) {
        setError(res.data.message);
        return;
      }
    } catch (err) {
      console.error(err);
      setError("Error checking existing accounts");
      return;
    }

    setError("");
    router.push("/register/step2");
  };

  return (
    <div className="register-wrapper">
      {/* Header */}
      <div className="register-header">
        <div className="register-badge">NEXT STEP - STUDENT JOURNEY</div>
        <h1 className="register-main-title">
          Share your academic background and secure your account.
        </h1>
        <p className="register-subtitle">
          Complete your educational details and create a secure password to protect your account.
        </p>
        <p className="register-login-link">
          Already started? <a onClick={() => router.push("/")}>Return to login</a>
        </p>
      </div>

      {/* Registration Card */}
      <div className="register-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="step-label">STEP 2 OF 5</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '40%' }}></div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="step-nav-label">Personal</span>
          </div>
          <div className="step-nav-item active">
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
          <h2 className="form-section-title">Education & Account</h2>
          <p className="form-section-subtitle">
            Tell us about your program and create your login credentials.
          </p>

          <form onSubmit={handleNext}>
            <div className="form-grid">
              <div className="form-field full-width">
                <label htmlFor="degreeProgramme">Degree Programme</label>
                <select
                  id="degreeProgramme"
                  value={formData.degreeProgramme || ""}
                  onChange={(e) => setFormData({ ...formData, degreeProgramme: e.target.value })}
                >
                  <option value="">Select your programme</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Information Technology">Information Technology</option>
                </select>
              </div>

              <div className="form-field full-width">
                <label htmlFor="level">Academic Level</label>
                <select
                  id="level"
                  value={formData.level || ""}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                >
                  <option value="">Select your level</option>
                  <option value="Level 4">Level 4</option>
                  <option value="Level 5">Level 5</option>
                  <option value="Level 6">Level 6</option>
                </select>
              </div>

              <div className="form-field full-width">
                <label>Internship Availability</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="fulltime"
                      name="availability"
                      value="Full-time"
                      checked={formData.availability === "Full-time"}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    />
                    <label htmlFor="fulltime">Full-time (5 days/week)</label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="parttime"
                      name="availability"
                      value="Part-time"
                      checked={formData.availability === "Part-time"}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    />
                    <label htmlFor="parttime">Part-time (3 days/week)</label>
                  </div>
                </div>
              </div>

              <div className="form-field full-width">
                <label htmlFor="universityEmail">University Email</label>
                <input
                  id="universityEmail"
                  type="email"
                  placeholder={`${formData.studentID || 'CB012345'}@students.apiit.lk`}
                  value={formData.email || ""}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="password">Create Password</label>
                <div className="input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="password-input"
                    placeholder="••••••••••"
                    value={formData.password || ""}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="password-input"
                    placeholder="••••••••••"
                    value={formData.confirmPassword || ""}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {error && <div className="register-error">{error}</div>}

            <div className="form-actions">
              <button type="button" className="btn-back" onClick={() => router.push("/register/step1")}>
                Back
              </button>
              <button type="submit" className="btn-next">
                Continue to preferences
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1Edu;
