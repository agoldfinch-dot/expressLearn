import { Router } from "express";
import getTopUsers from "./getTopUsers.js";



let router = Router();

router.get("/top", getTopUsers)

export default router