import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { responseHandler } from "../common/utils/res.service.js";
export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        if (!token) {
            responseHandler(res, 401, "Khong tim thay token");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            responseHandler(res, 401, "Khong tim thay user");
        }
        req.userId = user._id;
        next();

    } catch (error) {
        console.log(error);
    }
}