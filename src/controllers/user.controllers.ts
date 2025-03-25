import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";

const userRepository = AppDataSource.getRepository(User);
export const deleteUser = (req: Request, res: Response) => { 
    
    userRepository.delete(req.params.id)
    res.json({ message: "User deleted" });
}

export const createUser = (req: Request, res: Response) => {
    const [name,email,password] = req.body
    userRepository.create({
        name : name,
        email : email,
        password : password
    })
}