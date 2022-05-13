import React from "react";
import styled from "styled-components";
import { goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    #e5b179 0%,
    #f09819 51%,
    #ff512f 100%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 350px;
  .button {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.form`
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  margin-top: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: scale(0.95);
  }
`;

const Headers = () => {
  const goLogout = () => {
    localStorage.removeItem("token");
    alert("Logout feito!!");
    goToLogin(navigate);
  };
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <div>
          <h1>LabEddit</h1>
        </div>
        <div>
          <Button onClick={goLogout}> Logout </Button>
        </div>
      </Header>
    </Container>
  );
};

export default Headers;
