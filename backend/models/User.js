import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  studentID: { 
    type: String, 
    required: true, 
    unique: true 
  },
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  contactNumber: {
  type: String,
  required: true,
  match: /^[0-9]{10}$/
  },
  degreeProgramme: { 
    type: String, 
    enum: ["Software Engineering", "Computer Science", "Cybersecurity", "Artificial Intelligence"], 
    required: true 
  },
  level: { 
    type: String, 
    enum: ["Level 5", "Level 6"], 
    required: true 
  },
  availability: { 
    type: String, 
    enum: ["Full-time", "Part-time"], 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
   internshipPreferences:[
    { type: String,
      required: true
     }
  ], // e.g., ["UI/UX", "Project Management"]
  cvUrl: { 
    type: String,
    required: true
  },
  profilePicUrl: { 
    type: String ,
    required: true
  },
  role: { 
    type: String, 
    enum: ["student", "admin", "coordinator"], 
    default: "student" 
  }
});

const User = mongoose.model("User", userSchema);
export default User;
