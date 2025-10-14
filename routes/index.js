import { Router } from "express";
import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.route.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/dashboard",dashboardRoutes);

export default router;
