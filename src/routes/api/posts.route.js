import { Router } from "express";
import * as PostController from "../../controllers/post.controller";

const api = Router();

api.get("/:id", PostController.findOne)
api.get("/", PostController.findAll)
api.post("/", PostController.createPostDto)
api.patch("/:id", PostController.updatePostDto)
api.delete("/:id", PostController.deleteOne)

export default api;
