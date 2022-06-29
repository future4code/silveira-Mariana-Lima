import { login } from './endpoints/login';
import { singUp } from './endpoints/singUp';
import { app } from "./app";


//Signup

app.post("/singup", singUp)

//Login

app.post("/login", login)

//Pegar próprio perfil