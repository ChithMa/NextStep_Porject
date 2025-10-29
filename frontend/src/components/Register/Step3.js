import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "./RegisterContext";

function Step3() {
  const { formData, setFormData } = useContext(RegisterContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
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

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.cv) {
      setError("Please upload your CV");
      return;
    }
    setError("");
    navigate("/register/step4");
  };

  return (
    <div className="form-container">
      <h2>Step 3 – Upload CV</h2>
      <form onSubmit={handleNext}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step3;
