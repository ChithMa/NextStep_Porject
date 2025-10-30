import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./RegisterContext";

function Step2() {
  const { formData, setFormData } = useContext(RegisterContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

   const preferenceOptions = [
    "UI/UX Design",
    "Web Development",
    "Software Engineering",
    "Project Management",
    "Data Analysis",
    "Networking",
    "Cybersecurity",
    "Quality Assurance",
  ];
  //const options = ["UI/UX", "PM", "Cyber", "Frontend", "Backend"];

   const handleNext = (e) => {
    e.preventDefault();

    // ✅ Ensure all three preferences are selected
    if (
      !formData.internshipPreferences ||
      formData.internshipPreferences.length !== 3 ||
      formData.internshipPreferences.some((p) => !p)
    ) {
      setError("Please select all three internship preferences.");
      return;
    }

  const handleCheckbox = (option) => {
    const prefs = formData.internshipPreferences;
    if (prefs.includes(option)) {
      setFormData({ ...formData, internshipPreferences: prefs.filter((p) => p !== option) });
    } else {
      setFormData({ ...formData, internshipPreferences: [...prefs, option] });
    }
  };

  /*const handleNext = (e) => {
    e.preventDefault();
    // ✅ Validation: at least one checkbox must be selected
    if (formData.internshipPreferences.length === 0) {
      setError("Please select at least one internship preference.");
      return;
    }*/

    // Clear error and proceed
    setError("");
    navigate("/register/step3");
  };

  // Helper function for dropdown change
    const handlePreferenceChange = (index, value) => {
    const updatedPrefs = [...(formData.internshipPreferences || [])];
    updatedPrefs[index] = value;
    setFormData({ ...formData, internshipPreferences: updatedPrefs });
  };

  return (
    /*<div className="form-container">
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>*/
    <div className="form-container">
      <h2>Step 2 – Internship Preferences</h2>
      <form onSubmit={handleNext}>
        {[0, 1, 2].map((index) => (
          <div key={index}>
            <label>Preference {index + 1}</label>
            <select
              value={formData.internshipPreferences?.[index] || ""}
              onChange={(e) => handlePreferenceChange(index, e.target.value)}
            >
              <option value="">Select Preference</option>
              {preferenceOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step2;
