import { Router } from "express";
import getUsers from "./getUsers.js";
import addUser from "./addUser.js";
import getUser from "./getUser.js";
import deleteUser from "./deleteUser.js";
import updateUser from "./updateUser.js";



const router = Router();

router.get("/users", getUsers);
router.post("/users", addUser);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);


export default router;


