import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRegister, goToFeed } from "../../route/coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {BASE_URL} from "../../constants/url"

const LoginPage = () => {
    const {form, onChange, clear} = useForm ({email: "", password:""})
    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/users/login`, form)
        .then((resposta) => {
            localStorage.setItem("token", resposta.data.token)
            goToFeed(navigate)
        }).catch((erro) =>{
            console.log(erro.response)
            alert(erro.response.data.messagem)
        })
    }

    return(
        <div>
            <form onSubmit={login}>
                <input
                placeholder="E-mail"
                name={"email"}
                value={form.email}
                onChange={onchange}
                label={"Email"}
                variant={"outlined"}
                type={"email"}
                required
                >                    
                </input>
                <input
                placeholder="Senha"
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                type={"password"}
                required
                >
                </input>
                <button onClick={login}>Entrar</button>
                <h5>Cadastre-se</h5>
                <button onClick={() => goToRegister(navigate)}> Cadastar</button>
            </form>
        </div>
    )
}
export default LoginPage;