import { responseHandler } from "../common/utils/res.service.js";
import {
    createList,
    getAllLists,
    deleteList,
    renameList
} from "../common/utils/list.service.js";

export const newList = async (req, res) => {
    try {
        const boardId = req.query.bid;
        const title = req.body.title;
        const l = await createList(title,boardId);
        responseHandler(res, 201, "Tao list thanh cong", l);
    } catch (error) {
        console.log(error);
    }
}

export const getLists = async (req, res) => {
    try {
        const l = await getAllLists(req.query.bid);
        responseHandler(res, 200, "Lay danh sach list thanh cong", l);
    } catch (error) {
        console.log(error);
    }
}

export const removeList = async (req, res) => {
    try {
        const lid = req.query.lid;
        const l = await deleteList(lid);
        responseHandler(res, 200, "Xoa list thanh cong", l);
    } catch (error) {
        console.log(error);
    }
}

export const nameList = async (req, res) => {
    try {
        const listId = req.query.lid;
        const l = await renameList(listId, req.body.title);
        responseHandler(res, 200, "Doi ten list thanh cong", l);
    } catch (error) {
        console.log(error);
    }
}