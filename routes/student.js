import { Router } from "express";
import { homeStudent, joinSubject, savestudentSubject } from "../controllers/students.js";

const router = new Router();

router.get('/', homeStudent)
router.get('/joinSubject', joinSubject)
router.post('/joinSubject', savestudentSubject)

export default router;