import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./RegisterContext";
import axios from "axios";

function Step1() {
  const { formData, setFormData } = useContext(RegisterContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();

    // ✅ Validation for empty fields (including availability)
    if (
      !formData.studentID ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.contactNumber||
      !formData.degreeProgramme ||
      !formData.level ||
      !formData.email ||
      !formData.password ||
      !formData.availability
    ) {
      setError("All fields are required");
      return;
    }

    // ✅ Student ID rule
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

    // ✅ Email rule
    const emailRegex = new RegExp(`${formData.studentID}@students\\.apiit\\.lk$`);
    if (!emailRegex.test(formData.email)) {
      setError("Email must match format: StudentID@students.apiit.lk");
      return;
    }

    // ✅ Duplicate check (backend)
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
    navigate("/register/step2");
  };

  return (
    <div className="form-container">
      <h2>Step 1 – Student Information</h2>
      <form onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Student ID"
          value={formData.studentID || ""}
          onChange={(e) => setFormData({ ...formData, studentID: e.target.value })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName || ""}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName || ""}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
         <input
        type="text"
        placeholder="Contact Number"
        value={formData.contactNumber || ""}
        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
      />
        <select
          value={formData.degreeProgramme || ""}
          onChange={(e) => setFormData({ ...formData, degreeProgramme: e.target.value })}
        >
          <option value="">Select Programme</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>

        <select
          value={formData.level || ""}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
        >
          <option value="">Select Level</option>
          <option value="Level 5">Level 5</option>
          <option value="Level 6">Level 6</option>
        </select>

        <div className="availability-section">
          <label>Availability:</label>
          <div>
            <label>
              <input
                type="radio"
                name="availability"
                value="Full-time"
                checked={formData.availability === "Full-time"}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              />
              Full Time
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="Part-time"
                checked={formData.availability === "Part-time"}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              />
              Part Time
            </label>
          </div>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password || ""}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
         {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step1;
