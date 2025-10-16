
import {
    createBoard,
    getAllBoards,
    deleteBoard,
    renameBoard

} from "../common/utils/board.service.js";
import { responseHandler } from "../common/utils/res.service.js";

export const newBoard = async (req, res) => {
    try {
        const title = req.body.title;
        const userId = req.userId;
        console.log(userId);
        const b = await createBoard(title,userId);
        responseHandler(res, 201, "Tao board thanh cong", b);

    } catch (error) {
        console.log(error);
    }
}

export const getBoards = async (req, res) => {
    try {
        const b = await getAllBoards(req);
        responseHandler(res, 200, "Lay danh sach board thanh cong", b);
    } catch (error) {
        console.log(error);
    }
}

export const removeBoard = async (req, res) => {
    try {
        const bid = req.query.bid;
        const b = await deleteBoard(bid);
        responseHandler(res, 200, "Xoa board thanh cong", b);
    } catch (error) {
        console.log(error);
    }
}

export const nameBoard = async (req, res) => {
    try {
        const boardId = req.query.bid;
        const b = await renameBoard(boardId, req.body.title);
        responseHandler(res, 200, "Doi ten board thanh cong", b);
    } catch (error) {
        console.log(error);
    }
}
