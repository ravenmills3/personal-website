import express from "express";
import { protect } from "../utils/auth.js";
import { authUser, logoutUser, getUserMessages } from "../service/user.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserMessages);

export default router;
