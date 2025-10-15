import { Router } from "express";
import {
    newList,
    getLists,
    removeList,
    nameList
} from "../controllers/list.controller.js";
import {
    newCard,
    removeCard,
    updateCard
} from "../controllers/card.controller.js"


const boardRoutes = Router();
// List routes
boardRoutes.post("/newList", newList);
boardRoutes.post("/removeList", removeList);
boardRoutes.post("/renameList", nameList);
boardRoutes.get("/getLists", getLists);
//Card routes
boardRoutes.post("/newCard", newCard);
boardRoutes.post("/removeCard", removeCard);
boardRoutes.post("/updateCard", updateCard);

export default boardRoutes;
