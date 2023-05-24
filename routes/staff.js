import { Router } from "express";
import { homeStaff, showSubjectStudents, subjectInfo } from "../controllers/staffs.js";

const router = new Router();

router.get('/', homeStaff)
router.get('/subjects/:_id', subjectInfo)
router.get('/subjects/:_id/students', showSubjectStudents)
export default router;