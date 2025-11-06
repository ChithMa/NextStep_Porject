"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "./RegisterContext";

function Step2() {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("Step2 must be used within RegisterProvider");
  
  const { formData, setFormData } = context;
  const router = useRouter();
  const [error, setError] = useState("");
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(formData.internshipPreferences || []);

  const preferenceOptions = [
    { title: "UI/UX Design", desc: "Craft intuitive experiences aligned with design systems." },
    { title: "Product Management", desc: "Plan sprints, roadmaps, features, and coordinate cross-team stakeholders." },
    { title: "Cybersecurity", desc: "Monitor threats, conduct audits, and secure organizational systems." },
    { title: "Frontend Engineering", desc: "Bring interfaces to life with modern frameworks." },
    { title: "Backend Engineering", desc: "Design scalable services, APIs, and core logic." },
    { title: "Data Analysis", desc: "Extract insights using SQL, Python, and visualization tools." },
    { title: "Networking", desc: "Configure, secure, and troubleshoot network infrastructure." },
    { title: "Quality Assurance", desc: "Ensure code quality through testing and automation." },
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPreferences.length !== 3) {
      setError("Please select exactly 3 internship preferences.");
      return;
    }

    setFormData({ ...formData, internshipPreferences: selectedPreferences });
    setError("");
    router.push("/register/step3");
  };

  const togglePreference = (title: string) => {
    if (selectedPreferences.includes(title)) {
      setSelectedPreferences(selectedPreferences.filter(p => p !== title));
    } else if (selectedPreferences.length < 3) {
      setSelectedPreferences([...selectedPreferences, title]);
    }
  };

  return (
    <div className="register-wrapper">
      {/* Header */}
      <div className="register-header">
        <div className="register-badge">NEXT STEP - STUDENT JOURNEY</div>
        <h1 className="register-main-title">
          Tailor your experience to the roles that inspire you.
        </h1>
        <p className="register-subtitle">
          Choose the tracks you'd like to explore so we can align placements, mentors, and resources to your priorities.
        </p>
        <p className="register-login-link">
          Already started? <a onClick={() => router.push("/")}>Return to login</a>
        </p>
      </div>

      {/* Registration Card */}
      <div className="register-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="step-label">STEP 3 OF 5</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '60%' }}></div>
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
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="step-nav-label">Education</span>
          </div>
          <div className="step-nav-item active">
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
          <h2 className="form-section-title">Preferences</h2>
          <p className="form-section-subtitle">
            Let us know the roles and tracks that excite you the most.
          </p>

          <form onSubmit={handleNext}>
            <div className="preference-grid">
              {preferenceOptions.map((option) => (
                <div
                  key={option.title}
                  className={`preference-card ${selectedPreferences.includes(option.title) ? 'selected' : ''}`}
                  onClick={() => togglePreference(option.title)}
                >
                  <h4>{option.title}</h4>
                  <p>{option.desc}</p>
                </div>
              ))}
            </div>

            {error && <div className="register-error">{error}</div>}

            <div className="form-actions">
              <button type="button" className="btn-back" onClick={() => router.push("/register/step1-edu")}>
                Back
              </button>
              <button type="submit" className="btn-next">
                Continue to documents
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step2;
