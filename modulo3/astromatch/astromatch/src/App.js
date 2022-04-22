import './App.css';
import { useEffect, useState } from 'react';
import Home from './componentes/Home'
import Match from './componentes/Match'
import styled from 'styled-components';

const Container = styled.div`
  display:grid;
  justify-items: center;
  align-items: center;
` 

const Card = styled.div`
  width: 40%;
  height: 550px;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-top: 20px;
`

export default function App() {
  const [page, setPage] = useState("perfil")

  const mudarParaHome = () => {
    setPage("perfil")
  }

  const mudarParaMatch = () => {
    setPage("match")
  }

  const selectPage = () => {
    switch (page) {
      case "perfil":
        return <Home mudarParaMatch={mudarParaMatch} />
      case "match":
        return <Match mudarParaHome={mudarParaHome} />
      default:
        return <Home mudarParaMatch={mudarParaMatch} />
    }
  }

  return (
    <Container>
      <Card>
        {selectPage("")}
      </Card>
    </Container>
  );
} 