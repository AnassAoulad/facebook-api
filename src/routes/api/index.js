import { Router } from "express";
import articles from "./articles.route";
import users from "./users.route";
import posts from "./posts.route";
import authentication from "./authentication.route";
import verify from "../../middlewares/jwt.middleware";

const api = Router();

api.use("/articles", articles);
api.use("/users", verify, users);
api.use("/posts", verify, posts);
api.use("/authentication", authentication);

export default api;
