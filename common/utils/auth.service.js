import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import {responseHandler} from "./res.service.js";
export const getUser = async (req) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return false
        }
        return user;
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword, email });
        if (!user) {
            responseHandler(res, 400, "Tao tai khoan khong thanh cong");
        }
        return user;
    } catch (error) {
        console.log(error);
    }
}

export const passCompare = async (userPass,inputPass) => {
    try {
        const isMatch = await bcrypt.compare(inputPass, userPass);
        if (!isMatch) {
            return false
        }
        return isMatch;
    } catch (error) {
        console.log(error);
    }
}


export default { getUser, createUser, passCompare };

