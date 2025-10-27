import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    studentID: "",
    firstName: "",
    lastName: "",
    degreeProgramme: "",
    level: "",
    email: "",
    password: "",
    internshipPreferences: [],
    cv: null,
    profilePic: null
  });

  return (
    <RegisterContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  );
};
