import { Router } from "express";
import articles from "./articles.route";
import users from "./users.route";
import posts from "./posts.route";

const api = Router();

api.use("/articles", articles);
api.use("/users", users);
api.use("/posts", posts)

export default api;
