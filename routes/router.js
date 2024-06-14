import { Router } from "express";
import userRouter from "./usersRoutes/userRouter.js"
import balanceRouter from "./balanceRoutes/balanceRouter.js";
import topRouter from "./topRoutes/topRouter.js"

let router = Router()
router = Object.assign(router, userRouter, balanceRouter, topRouter);

export default router;





