import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./RegisterContext";
import axios from "axios";

function Step4() {
  const { formData } = useContext(RegisterContext);
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !["image/jpeg", "image/png"].includes(file.type)) {
      setError("Only JPG or PNG images are allowed for profile picture");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
    setError("Profile picture size must not exceed 2 MB");
    return;
  }

    setError("");
    setProfilePic(file);
  };

  const handleSubmit = async (e) => {
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
      // ✅ Append internship preferences properly
     formData.internshipPreferences.forEach((pref) => {
      data.append("internshipPreferences[]", pref);
      });
      //data.append("internshipPreferences", formData.internshipPreferences.join(","));
      data.append("cv", formData.cv);
      data.append("profilePic", profilePic);

      const res = await axios.post("http://localhost:5000/api/auth/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
      window.location.href = "/"; // navigate to login page
    }, 2000);
    } catch (err) {
      console.error(err);
      setError("Error during registration. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Step 4 – Upload Profile Picture</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Step4;
