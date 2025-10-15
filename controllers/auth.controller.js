import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
    getUserByEmail,
    createUser,
    passCompare,
    getUserById
} from "../common/utils/auth.service.js";
import { responseHandler } from "../common/utils/res.service.js";
import { get } from "mongoose";

export const registerController = async (req, res) => {
    try {
        const c = await getUserByEmail(req);
        if (c === false) {
            let u = await createUser(req, res);
            responseHandler(res, 201, "Dang ky tai khoan thanh cong", u);
        } else {
            responseHandler(res, 400, "Email da ton tai, vui long chon email khac"); 
        }
    } catch (error) {
        console.log(error);
    }
}

export const loginController = async (req, res) => {
    try {
        const c = await getUserByEmail(req);
        if (c === false) {
            responseHandler(res, 400, "Email khong ton tai");
        } else {
            passCompare(req.body.password, c.password).then(isMatch => {
                
                if (!isMatch) {
                    responseHandler(res, 400, "Sai mat khau");
                } else {
                    const token = jwt.sign({ id: c._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPRIES_IN });
                    responseHandler(res, 200, "Dang nhap thanh cong", { token });
                }
            });
        }

    } catch (error) {
        console.log(error);
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await getUserById(req.userId);
        if (!user) {
            responseHandler(res, 404, "Khong tim thay user");
        } else {
            responseHandler(res, 200, "Lay thong tin user thanh cong", user);
        }
    } catch (error) {
        console.log(error);
    }
}