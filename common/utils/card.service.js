import List from "../../models/List.js";
import { responseHandler } from "./res.service.js";
import User from "../../models/User.js";
import Board from "../../models/Board.js";
import Card from "../../models/Card.js";


export const createCard = async (title, listId, des) => {
    try {

        // console.log(req.userId);
        const card = await Card.create({ title: title, list: listId, description: des });
        const l = await List.findOneAndUpdate(
            { _id: listId },
            { $push: { cards: card._id } },
            { new: true }
        );
        return card;
    } catch (error) {
        console.log(error);
    }
}

export const getAllCards = async (listId) => {
    try {
        const cards = await Card.find({ list: listId });
        return cards;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCard = async (cardId) => {
    try {
        const card = await Card.findOneAndDelete({ _id: cardId });
        const list = await List.findById(card.list);
        list.cards.pull(card._id);
        await list.save();

        return list;
        // responseHandler(res, 200, "Xoa board thanh cong", board);
    } catch (error) {
        console.log(error);
    }
}

export const update = async (cardId, newTitle, newDes) => {
    try {
        
        // const card = await Card.findOneAndUpdate(
        //     { _id: cardId },
        //     { title: newTitle },
        //     { description: newDes },
        //     { new: true }
        // );
        const card = await Card.findById(cardId);
        card.title = newTitle;
        card.description = newDes;
        card.save();
        
        return card;
    } catch (error) {
        console.log(error);
    }
}

export default { createCard, getAllCards, deleteCard };