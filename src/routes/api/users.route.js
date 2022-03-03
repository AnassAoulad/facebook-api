import { Router } from "express";
import * as UserController from "../../controllers/user.controller";

const api = Router();

// api.post("/", ArticleController.createOne);
api.get("/", UserController.findAll)
api.get("/:id/profile", UserController.findProfile)
api.post("/", UserController.createUser)
// api.get("/:id", ArticleController.findOne);
// api.put("/:id", ArticleController.updateOne);
// api.delete("/:id", ArticleController.deleteOne);

export default api;
