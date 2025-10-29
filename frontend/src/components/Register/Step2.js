import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./RegisterContext";

function Step2() {
  const { formData, setFormData } = useContext(RegisterContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const options = ["UI/UX", "PM", "Cyber", "Frontend", "Backend"];

  const handleCheckbox = (option) => {
    const prefs = formData.internshipPreferences;
    if (prefs.includes(option)) {
      setFormData({ ...formData, internshipPreferences: prefs.filter((p) => p !== option) });
    } else {
      setFormData({ ...formData, internshipPreferences: [...prefs, option] });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    // ✅ Validation: at least one checkbox must be selected
    if (formData.internshipPreferences.length === 0) {
      setError("Please select at least one internship preference.");
      return;
    }

    // Clear error and proceed
    setError("");

    navigate("/register/step3");
  };

  return (
    <div className="form-container">
      <h2>Step 2 – Internship Preferences</h2>
      <form onSubmit={handleNext}>
        {options.map((opt) => (
          <div key={opt}>
            <input
              type="checkbox"
              checked={formData.internshipPreferences.includes(opt)}
              onChange={() => handleCheckbox(opt)}
            />
            <label>{opt}</label>
          </div>
        ))}
        {/* Error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step2;
