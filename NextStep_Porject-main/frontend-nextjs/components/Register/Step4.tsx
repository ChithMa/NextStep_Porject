"use client";

import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "./RegisterContext";
import axios from "axios";

function Step4() {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("Step4 must be used within RegisterProvider");
  
  const { formData } = context;
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError("Only JPG or PNG images are allowed for profile picture");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Profile picture size must not exceed 2 MB");
      return;
    }

    setError("");
    setProfilePic(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profilePic) {
      setError("Please upload your profile picture");
      return;
    }

    try {
      const data = new FormData();
      data.append("studentID", formData.studentID);
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("contactNumber", formData.contactNumber);
      data.append("degreeProgramme", formData.degreeProgramme);
      data.append("level", formData.level);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("availability", formData.availability);
      
      formData.internshipPreferences.forEach((pref) => {
        data.append("internshipPreferences", pref);
      });
      
      if (formData.cv) {
        data.append("cv", formData.cv);
      }
      data.append("profilePic", profilePic);

      const res = await axios.post("http://localhost:5000/api/auth/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Error during registration. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      {/* Header */}
      <div className="register-header">
        <div className="register-badge">NEXT STEP - STUDENT JOURNEY</div>
        <h1 className="register-main-title">
          Bring everything together and finalise your profile.
        </h1>
        <p className="register-subtitle">
          Add a professional photo and confirm your details so coordinators can recognize you instantly.
        </p>
        <p className="register-login-link">
          Already started? <a onClick={() => router.push("/")}>Return to login</a>
        </p>
      </div>

      {/* Registration Card */}
      <div className="register-card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="step-label">STEP 5 OF 5</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '100%' }}></div>
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
          <div className="step-nav-item inactive">
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="step-nav-label">Documents</span>
          </div>
          <div className="step-nav-item active">
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
          <h2 className="form-section-title">Profile</h2>
          <p className="form-section-subtitle">
            Add a face to your journey with a professional profile photo.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="profile-preview">
              <div className="profile-image-section">
                <div className="profile-image-circle">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Profile" className="profile-image-preview" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>
                <div className="upload-prompt">
                  <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                    {profilePic ? "No file selected" : "No file selected"}
                  </p>
                  <button type="button" onClick={() => fileInputRef.current?.click()}>
                    {profilePic ? "Change photo" : "Upload a new photo"}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="file-upload-input"
                  />
                </div>
              </div>

              <div className="profile-details">
                <h4>Review your details</h4>
                <div className="detail-row">
                  <span className="detail-label">Student ID</span>
                  <span className="detail-value">{formData.studentID || "—"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Programme</span>
                  <span className="detail-value">{formData.degreeProgramme || "—"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Level</span>
                  <span className="detail-value">{formData.level || "—"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value">{formData.availability || "—"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Preferences</span>
                  <span className="detail-value">{formData.internshipPreferences.filter(p => p).join(", ") || "—"}</span>
                </div>
              </div>
            </div>

            {error && <div className="register-error">{error}</div>}
            {success && <div className="register-success">{success}</div>}

            <div className="form-actions">
              <button type="button" className="btn-back" onClick={() => router.push("/register/step3")}>
                Back
              </button>
              <button type="submit" className="btn-submit">
                Complete registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step4;
