import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { goToRegister } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import {
  Container,
  Button,
  Header,
  Form
} from "../../pages/LoginPage/LoginStyled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToFeed } from "../../routes/coordinator";
import logo from "../../assets/unknown.png";
import "../../styles.css";

const LoginPage = () => {
  const { form, onChange, clear } = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  //    const [isloading, setIsLoading] = useState(false)

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        goToFeed(navigate);
      })
      .catch((erro) => {
        console.log(erro.response);
        alert(erro.response.data.message);
      });
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
        <h2>LabEddit</h2>
      </Header>

      <Form onSubmit={login}>
        <h4>E-mail:</h4>
        <input
          placeholder="Email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"Email"}
          variant={"outlined"}
          type={"email"}
          required
        ></input>
        <h4>Senha:</h4>
        <input
          placeholder="Senha"
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          type={"password"}
          required
        ></input>
        <Button class="btn" onClick={login}>
          Entrar
        </Button>
        <p>Esqueceu sua senha</p>
        <h3>Cadastre-se</h3>
        <Button class="btn" onClick={() => goToRegister(navigate)}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
