import { Router } from "express";
import {
    newBoard,
    getBoards,
    removeBoard,
    nameBoard
} from "../controllers/board.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";

const dashboardRoutes = Router();

dashboardRoutes.post("/addBoard",authMiddleware, newBoard);
dashboardRoutes.post("/removeBoard",authMiddleware, removeBoard);
dashboardRoutes.post("/renameBoard",authMiddleware, nameBoard);
dashboardRoutes.get("/getBoards",authMiddleware, getBoards);

export default dashboardRoutes;
