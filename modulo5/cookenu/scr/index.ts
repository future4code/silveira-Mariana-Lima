import { getRecipe } from './endpoints/getRecipe';
import { createRecipe } from './endpoints/createRecipe';
import { getUserProfile } from './endpoints/getUserProfile';
import { getProfile } from './endpoints/getProfile';
import { login } from './endpoints/login';
import { singUp } from './endpoints/singUp';
import { app } from "./app";
import { followUser } from './endpoints/followUser';


//Signup

app.post("/singup", singUp)

//Login

app.post("/login", login)

//Pegar próprio perfil

app.get("/user/profile", getProfile)

// Pega perfil de outro usuário

app.get("/user/:id", getUserProfile)

// Criar receita

app.post("/recipes", createRecipe)

// Pega receita

app.get("/recipes/:id", getRecipe)

// Serguir usuário

app.post("/user/follow", followUser)

// Deixar de seguir

app.post("/user/unfollow",)