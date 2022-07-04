import { app } from "./controller/app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.post("/user/signup", userController.singup)
app.post("/user/login", userController.login)
app.get("/user", userController.getUsers)
app.delete("/user/:id", userController.deleteUser) 