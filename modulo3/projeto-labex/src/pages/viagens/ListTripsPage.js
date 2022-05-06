import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "../viagens/ListTripsstyled";
import { Card } from "../viagens/ListTripsstyled";
import { DivCard } from "../viagens/ListTripsstyled";
import "../../styles.css";

function ListTripsPage() {
  const [viagens, setViagens] = useState([]);
  const navigate = useNavigate();

  const goInscricao = () => {
    navigate("/trips/application");
  };

  const goHome = () => {
    navigate("/");
  };

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/trips"
      )
      .then((resposta) => {
        setViagens(resposta.data.trips);
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);

  const listarViagens = viagens.map((viagem) => {
    return (
      <Card key={viagem.id}>
        <p>
          <b>Nome:</b> {viagem.name}
        </p>
        <p>
          <b>Descrição:</b> {viagem.description}
        </p>
        <p>
          <b>Duração da viagem:</b> {viagem.durationInDays}
        </p>
        <p>
          <b>Data:</b> {viagem.date}
        </p>
      </Card>
    );
  });

  return (
    <div>
      <Container className="App">
        <div>
          <h1>Lista de Viagens</h1>
        </div>
      </Container>
      <div className="button">
        <div>
          <button onClick={goInscricao}>Inscreva-se</button>
        </div>
        <div>
          <button onClick={goHome}>Voltar</button>
        </div>
      </div>

      <div>
        <DivCard>{listarViagens}</DivCard>
      </div>
    </div>
  );
}

export default ListTripsPage;
