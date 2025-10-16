import Board from "../../models/Board.js";
import { responseHandler } from "./res.service.js";
import User from "../../models/User.js";

export const createBoard = async (title,userId) => {
    try {
        
        // console.log(req.userId);
        const board = await Board.create({ title: title, owner: userId });
        const u = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { boards: board._id } },
            { new: true }
        );
        return board;
    } catch (error) {
        console.log(error);
    }
}

export const getAllBoards = async (req) => {
    try {
        const boards = await Board.find({ owner: req.userId });
        return boards;
    } catch (error) {
        console.log(error);
    }
}

export const deleteBoard = async (boardId) => {
    try {
        const board = await Board.findOneAndDelete({ _id: boardId });
        const user = await User.findById(board.owner);
        user.boards.pull(board._id);
        await user.save();
        
        return board;
        // responseHandler(res, 200, "Xoa board thanh cong", board);
    } catch (error) {
        console.log(error);
    }
}

export const renameBoard = async (boardId, newTitle) => {
    try {
        const board = await Board.findOneAndUpdate(
            { _id: boardId },
            { title: newTitle },
            { new: true }
        );
        board.save();
        return board;
    } catch (error) {
        console.log(error);
    }
}

export default { createBoard, getAllBoards, deleteBoard, renameBoard };