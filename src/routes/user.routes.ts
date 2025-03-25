<<<<<<< HEAD
import { Router } from "express";
import { deleteUser, createUser } from "../controllers/user.controllers";
=======
import { Router } from "express"
import  {deleteUser}  from "../controllers/user.controllers"
import { getAllUsers, getUserById } from "../controllers/user.controllers";
>>>>>>> 4043c8484c9415ade9fda17b5f4e7d33a86deb28

export const userRouter = Router();

// DELETE ONE USER
userRouter.delete('/:id', deleteUser);

<<<<<<< HEAD
// CREATE ONE USER
userRouter.post('/', createUser);
=======
// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
userRouter.get("/:id", getUserById);
>>>>>>> 4043c8484c9415ade9fda17b5f4e7d33a86deb28
