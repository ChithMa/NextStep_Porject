import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./RegisterContext";

function Step1() {
  const { formData, setFormData } = useContext(RegisterContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    const { studentID, firstName, lastName, degreeProgramme, level, availability, email, password } = formData;
    if (!studentID || !firstName || !lastName || !degreeProgramme || !level || !availability|| !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    navigate("/register/step2");
  };

  return (
    <div className="form-container">
      <h2>Step 1 : Basic Info</h2>
      <form onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Student ID"
          value={formData.studentID}
          onChange={(e) => setFormData({ ...formData, studentID: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
        <select
          value={formData.degreeProgramme}
          onChange={(e) => setFormData({ ...formData, degreeProgramme: e.target.value })}
          required
        >
          <option value="">Select Degree Programme</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
        </select>
        <br/>
        <select
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
          required
        >
          <option value="">Select Level</option>
          <option value="Level 5">Level 5</option>
          <option value="Level 6">Level 6</option>
        </select>
         <p>Availability Type:</p>
          <label>
            <input
              type="radio"
              name="availability"
              value="Full-time"
              checked={formData.availability === "Full-time"}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            />
            Full-time
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              value="Part-time"
              checked={formData.availability === "Part-time"}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            />
            Part-time
          </label>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step1;
