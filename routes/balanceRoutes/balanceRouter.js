import { Router } from "express";
import addBalance from "./addBalance.js";
import reduceBalance from "./reduceBalance.js";
import setBalance from "./setBalance.js";

let router = Router();

router.patch("/balance/add/:id", addBalance);
router.patch("/balance/reduce/:id", reduceBalance)
router.patch("/balance/set/:id", setBalance)

export default router;