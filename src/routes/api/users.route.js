import { Router } from "express";
import * as UserController from "../../controllers/user.controller";

const api = Router();

api.get("/", UserController.findAll)
api.get("/:id/profile", UserController.findOne)
api.patch("/:id/profile", UserController.updateOne)
api.delete("/:id", UserController.deleteOne)

export default api;
