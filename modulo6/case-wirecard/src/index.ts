import { UserController } from "./controller/UserController"
import { app } from "./services/app"


const userController = new UserController()


app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)


