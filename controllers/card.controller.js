import { responseHandler } from "../common/utils/res.service.js";
import {
    createCard,
    getAllCards,
    deleteCard,
    update
} from "../common/utils/card.service.js";


export const newCard = async (req,res) => {
    try {
        const listId = req.body.lid;
        const title = req.body.title;
        const des = req.body.description;
        const c = await createCard(title, listId, des);
        responseHandler(res, 201, "Tao card thanh cong", c);
    } catch (error) {
        console.log(error);
    }
}

export const removeCard = async (req, res) => {
    try {
        const cid = req.query.cid;
        const c = await deleteCard(cid);
        responseHandler(res, 200, "Xoa card thanh cong", c);
    } catch (error) {
        console.log(error);
    }
}

export const updateCard = async (req, res) => {
    try {
        const cardId = req.body.cid;
        const title = req.body.title;
        const des = req.body.description;
        
        const c = await update(cardId, title, des);
        responseHandler(res, 200, "Cap nhat card thanh cong", c);
    } catch (error) {
        console.log(error);
    }
}