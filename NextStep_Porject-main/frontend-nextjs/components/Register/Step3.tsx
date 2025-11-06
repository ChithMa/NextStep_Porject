"use client";

import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "./RegisterContext";

function Step3() {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("Step3 must be used within RegisterProvider");
  
  const { formData, setFormData } = context;
  const [error, setError] = useState("");
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed for CV");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("CV size must not exceed 5 MB");
      return;
    }

    setError("");
    setFormData({ ...formData, cv: file });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cv) {
      setError("Please upload your CV");
      return;
    }
    setError("");
    router.push("/register/step4");
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="register-wrapper">
      {/* Header */}
      <div className="register-header">
        <div className="register-badge">NEXT STEP - STUDENT JOURNEY</div>
        <h1 className="register-main-title">
          Showcase your journey with a polished CV.
        </h1>
        <p className="register-subtitle">
          Upload a recent PDF so the coordination team can match you with the right mentors and placement partners.
        </p>
        <p className="register-login-link">
          Already started? <a onClick={() => router.push("/")}>Return to login</a>
        </p>
      </div>

      {/* Registration Card */}
      <div className="register-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="step-label">STEP 4 OF 5</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '80%' }}></div>
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
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span className="step-nav-label">Preferences</span>
          </div>
          <div className="step-nav-item active">
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
          <h2 className="form-section-title">Credentials</h2>
          <p className="form-section-subtitle">
            Upload your latest CV or resume so mentors can review your experience.
          </p>

          <form onSubmit={handleNext}>
            <div 
              className={`file-upload-area ${formData.cv ? 'has-file' : ''}`}
              onClick={handleUploadClick}
            >
              <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <h4>
                {formData.cv ? formData.cv.name : "Drag & drop your CV or click to browse"}
              </h4>
              <p>PDF format (Max 5 MB). Ensure your latest experience is included.</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-upload-input"
              />
            </div>

            {formData.cv && (
              <p style={{ textAlign: 'center', fontSize: '14px', color: '#4CAF50', marginTop: '-8px' }}>
                ✓ Ready to upload
              </p>
            )}

            {error && <div className="register-error">{error}</div>}

            <div className="form-actions">
              <button type="button" className="btn-back" onClick={() => router.push("/register/step2")}>
                Back
              </button>
              <button type="submit" className="btn-next">
                Continue to profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step3;
