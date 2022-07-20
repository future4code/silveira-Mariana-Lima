import { CardController } from "./controller/CardController"
import { UserController } from "./controller/UserController"
import { app } from "./services/app"

const userController = new UserController()
const cardController = new CardController()

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)

app.post("/card/createCard",cardController.insertCard)

