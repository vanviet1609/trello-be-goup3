import { Router } from "express";
import {
    newList,
    getLists,
    removeList,
    nameList
} from "../controllers/list.controller.js";
import { get } from "mongoose";

const boardRoutes = Router();

boardRoutes.post("/newList", newList);
boardRoutes.post("/removeList", removeList);
boardRoutes.post("/renameList", nameList);
boardRoutes.get("/getLists", getLists);

export default boardRoutes;
