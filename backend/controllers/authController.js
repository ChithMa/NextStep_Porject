import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = "supersecretkey";

// ---------------- Student Registration ----------------
export const registerStudent = async (req, res) => {
  try {
    const {
      studentID,
      firstName,
      lastName,
      degreeProgramme,
      level,
      availability, // <-- NEW FIELD
      email,
      password,
      internshipPreferences
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle file uploads
    const cvFile = req.files["cv"] ? req.files["cv"][0].path : null;
    const profilePicFile = req.files["profilePic"] ? req.files["profilePic"][0].path : null;

    const newUser = new User({
      studentID,
      firstName,
      lastName,
      degreeProgramme,
      level,
      availability, // <-- NEW FIELD
      email,
      password: hashedPassword,
      internshipPreferences: internshipPreferences ? internshipPreferences.split(",") : [],
      cvUrl: cvFile,
      profilePicUrl: profilePicFile,
      role: "student"
    });

    await newUser.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering student", error });
  }
};

// ---------------- Login ----------------
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Hardcoded users
  const hardcodedUsers = [
    {
      email: "admin@mysystem.com",
      password: "admin123",
      role: "admin",
      firstName: "Tharindu",
      lastName: "Fernando",
    },
    {
      email: "coord@mysystem.com",
      password: "coord123",
      role: "coordinator",
      firstName: "Nadeesha",
      lastName: "Perera",
    },
  ];

  // Check hardcoded users first
  const hardUser = hardcodedUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (hardUser) {
    const token = jwt.sign(
      { email, role: hardUser.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({
      message: "Login successful",
      user: {
        role: hardUser.role,
        firstName: hardUser.firstName,
        lastName: hardUser.lastName,
        email: hardUser.email,
      },
      token,
    });
  }

  // Then check for student in DB
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    user: {
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      degreeProgramme: user.degreeProgramme,
      level: user.level,
      availability: user.preference,
    },
    token,
  });
};
