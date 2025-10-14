import {
    createBoard,
    getAllBoards,
    deleteBoard,
    renameBoard

} from "../common/utils/board.service.js";
import { responseHandler } from "../common/utils/res.service.js";

export const newBoard = async (req, res) => {
    try {
        const b = await createBoard(req);
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
        const b = await deleteBoard(req.body.id);
        responseHandler(res, 200, "Xoa board thanh cong", b);
    } catch (error) {
        console.log(error);
    }
}

export const nameBoard = async (req, res) => {
    try {
        const b = await renameBoard(req.body.id, req.body.title);
        responseHandler(res, 200, "Doi ten board thanh cong", b);
    } catch (error) {
        console.log(error);
    }
}
