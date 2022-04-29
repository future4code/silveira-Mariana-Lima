import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Card, DivCard } from "../login/Loginstyled";
import "../../styles.css"

const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      navigate("/admin/trips/list");
    }
  }, []);
};

function LoginPage() {
  useProtectedPage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitLogin = (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/login",
        body
      )
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        navigate("/admin/trips/list");
      })
      .catch((erro) => {
        alert("Email ou senha inválida");
      });
  };

  return (
    <div>
      <Container>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <button onClick={goHome}> Inicio </button>
        </div>
      </Container>
      <DivCard>
        <Card className="input1">
          <form>
            <p>Email:</p>
            <input
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              required
              type={"email"}
            ></input>
            <p>Senha:</p>
            <input
              placeholder="Senha"
              value={password}
              onChange={onChangePassword}
              required
              pattern={"^.{5,}"}
              title={"A senha deve ter no mínimo 5 caracteres"}
            ></input>
            <Button onClick={submitLogin}>Enviar</Button>
          </form>
        </Card>
      </DivCard>
    </div>
  );
}

export default LoginPage;
