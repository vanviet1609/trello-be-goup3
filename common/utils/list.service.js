import List from "../../models/List.js";
import { responseHandler } from "./res.service.js";
import User from "../../models/User.js";
import Board from "../../models/Board.js";

export const createList = async (title,boardId) => {
    try {
        
        // console.log(req.userId);
        const list = await List.create({ title: title, board: boardId });
        const b = await Board.findOneAndUpdate(
            { _id: boardId },
            { $push: { lists: list._id } },
            { new: true }
        );
        return list;
    } catch (error) {
        console.log(error);
    }
}

export const getAllLists = async (boardId) => {
    try {
        const lists = await List.find({ board: boardId });
        return lists;
    } catch (error) {
        console.log(error);
    }
}

export const deleteList = async (listId) => {
    try {
        const list = await List.findOneAndDelete({ _id: listId });
        const board = await Board.findById(list.board);
        board.lists.pull(list._id);
        await board.save();
        
        return list;
        // responseHandler(res, 200, "Xoa board thanh cong", board);
    } catch (error) {
        console.log(error);
    }
}

export const renameList = async (listId, newTitle) => {
    try {
        const list = await List.findOneAndUpdate(
            { _id: listId },
            { title: newTitle },
            { new: true }
        );
        list.save();
        return list;
    } catch (error) {
        console.log(error);
    }
}

export default { createList, getAllLists, deleteList, renameList };