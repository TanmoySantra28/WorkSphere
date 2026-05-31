import { Router } from "express";
import { protect, protectAdmin } from "../middleware/auth.js";
import { createPayslip, getPayslipId, getPayslips } from "../controllers/payslipController.js";

const payslipRouter = Router();

payslipRouter.post("/", protect, protectAdmin, createPayslip)
payslipRouter.get("/", protect, getPayslips)
payslipRouter.get("/:id", protect, getPayslipId)

export default payslipRouter;