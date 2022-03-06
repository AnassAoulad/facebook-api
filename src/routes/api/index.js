import { Router } from "express";
import articles from "./articles.route";
import users from "./users.route";
import posts from "./posts.route";
import authentication from "./authentication.route";

const api = Router();

api.use("/articles", articles);
api.use("/users", users);
api.use("/posts", posts);
api.use("/authentication", authentication);

export default api;
