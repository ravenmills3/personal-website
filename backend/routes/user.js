import express from "express";
import { protect } from "../utils/auth.js";
import { registerUser, authUser, logoutUser, getUserMessages } from "../service/user.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserMessages);

export default router;
