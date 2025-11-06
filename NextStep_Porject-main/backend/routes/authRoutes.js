import express from "express";
import multer from "multer";
import { registerStudent, login, checkDuplicates } from "../controllers/authController.js";

const router = express.Router();



// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Student registration with CV and profile picture upload
router.post("/register", upload.fields([
  { name: "cv", maxCount: 1 },
  { name: "profilePic", maxCount: 1 }
]), registerStudent);

router.post("/login", login);
router.post("/check-duplicates", checkDuplicates);

export default router;
