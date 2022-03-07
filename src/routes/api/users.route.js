import { Router } from "express";
import * as UserController from "../../controllers/user.controller";

const api = Router();
api.get("/:id/posts", UserController.findPosts)
api.get("/:id/profile", UserController.findProfile)
api.patch("/:id/profile", UserController.updateOne)
api.delete("/:id", UserController.deleteOne)

export default api;
