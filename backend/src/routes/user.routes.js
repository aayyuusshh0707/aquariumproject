import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router();

export const Register = router.post("/register", registerUser);
