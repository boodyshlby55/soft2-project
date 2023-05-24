import { Router } from "express";
import { homeStudent } from "../controllers/students.js";

const router = new Router();

router.get('/', homeStudent)
router.get('/joinSubject',)

export default router;