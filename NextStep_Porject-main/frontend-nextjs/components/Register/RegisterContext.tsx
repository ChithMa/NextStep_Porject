"use client";

import { createContext, useState, ReactNode } from "react";

interface FormData {
  studentID: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  degreeProgramme: string;
  level: string;
  availability: string;
  email: string;
  password: string;
  confirmPassword: string;
  internshipPreferences: string[];
  cv: File | null;
  profilePic: File | null;
}

interface RegisterContextType {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    studentID: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    degreeProgramme: "",
    level: "",
    availability: "",
    email: "",
    password: "",
    confirmPassword: "",
    internshipPreferences: ["", "", ""],
    cv: null,
    profilePic: null
  });

  return (
    <RegisterContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  );
};
