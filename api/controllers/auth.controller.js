import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup=async (req,res,next)=>{
    const {username,email,password}=req.body;
    const hashed_password=bcrypt.hashSync(password,10);
    const newUser=new User({username,email,password:hashed_password});
    
    try {
        await newUser.save();
        res.status(201).json("User created successfully")
    } catch (error) {
        next(errorHandler(500,error.message));
    }
}


