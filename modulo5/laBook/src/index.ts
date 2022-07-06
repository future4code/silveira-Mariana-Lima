import { PostController } from './controller/PostController';
import { UserController } from './controller/UserController';
import { app } from "./controller/app";

const userController = new UserController
const postController = new PostController

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)
app.post("/post", postController.createPost)
app.get("/post/:id", postController.SelectPost)