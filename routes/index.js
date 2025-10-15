import { Router } from "express";
import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.route.js";
import boardRoutes from "./board.route.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/dashboard",dashboardRoutes);

router.use("/board",boardRoutes);

export default router;
