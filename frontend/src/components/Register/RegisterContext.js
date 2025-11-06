import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    studentID: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    degreeProgramme: "",
    level: "",
    availability: "",
    email: "",
    password: "",
    internshipPreferences: ["", "", ""],
    //internshipPreferences: [],
    cv: null,
    profilePic: null
  });

  return (
    <RegisterContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  );
};
