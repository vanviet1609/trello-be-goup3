import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
    getUser,
    createUser,
    passCompare
} from "../services/auth.service.js";
import { responseHandler } from "../services/res.service.js";

export const registerController = async (req, res) => {
    try {
        const c = await getUser(req);
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
        const c = await getUser(req);
        if (c === false) {
            responseHandler(res, 400, "Email khong ton tai");
        } else {
            passCompare(c.password, req.body.password).then(isMatch => {
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
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "Không tìm thấy user với token này"
            })
        }
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}