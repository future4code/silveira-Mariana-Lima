import React from "react";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container, Header, Form, Button } from "./RegisterStyled";

const RegisterPage = () => {
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const cadastrar = (event) => {
    cadastro();
    event.preventDefault();
    goToFeed(navigate);
    cleanFields();
  };

  const cadastro = () => {
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((resposta) => alert("Cadastro realizado!"))
      .catch((erro) => console.log(erro));
  };

  return (
    <Container>
      <div>
        <div onSubmit={cadastrar}>
          <Header>
            <h1>Cadastrar</h1>
            <Button onClick={() => goToLogin(navigate)}> Voltar </Button>
          </Header>
          <Form>
            <p>Nome:</p>
            <input
              placeholder="name"
              name={"username"}
              value={form.username}
              onChange={onChange}
              label={"name"}
              variant={"outlined"}
              type={"name"}
              required
            />
            <p>E-mail:</p>
            <input
              placeholder="Email"
              name={"email"}
              value={form.email}
              onChange={onChange}
              label={"Email"}
              variant={"outlined"}
              type={"email"}
              required
            />
            <p>Senha:</p>
            <input
              placeholder="Senha"
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              type={"password"}
              required
              pattern={"^.{8,}"}
              title={"A senha deve ter no mínimo 8 caracteres"}
            />
            <br />
            <Button onClick={cadastrar}>Cadastrar</Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
