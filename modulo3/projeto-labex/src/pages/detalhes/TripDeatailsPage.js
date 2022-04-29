import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Button, Card } from "../detalhes/TripsDetailsstyled";

const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/login");
    }
  }, []);
};

function TripDetailsPage() {
  useProtectedPage();

  const [viagem, setViagem] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const goListAdmin = () => {
    navigate("/admin/trips/list");
  };

  const getTrip = () => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/trip/${params.id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((resposta) => {
        setViagem(resposta.data.trip);

        setCandidates(resposta.data.trip.candidates);
        setApproved(resposta.data.trip.approved);
      })
      .catch((error) => {
        console.log("Deu erro: ", error);
      });
  };
  useEffect(() => {
    getTrip();
  }, []);

  const decide = (id, approve) => {
    const body = {
      approve: approve
    };
    console.log(body);
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/trips/${viagem.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((resposta) => {
        getTrip();
      })
      .catch((error) => {
        console.log("Deu erro: ", error.message);
      });
  };

  const candidatesPending = candidates.map((candidato) => {
    return (
      <div>
        <p>Nome: {candidato.name}</p>
        <p>Texto: {candidato.applicationText}</p>
        <button onClick={() => decide(candidato.id, true)}>Aprovar</button>
        <button onClick={() => decide(candidato.id, false)}>Reprovar</button>
      </div>
    );
  });

  const approveds = approved.map((aprovados) => {
    return (
      <div>
        <p>{aprovados.name}</p>
      </div>
    );
  });

  return (
    <div>
      <Container className="App">
        <div>
          <p>Detalhes</p>
        </div>
        <div>
          <Button onClick={goListAdmin}> Voltar </Button>
        </div>
      </Container>
      <Card>
        <div key={viagem.name}>
          <p>Nome:{viagem.name}</p>
          <p>Descrição: {viagem.description}</p>
          <p>Duração da viagem: {viagem.durationInDays}</p>
          <p>Data: {viagem.date}</p>
        </div>
      </Card>
      <Card>
        <h2>Candidatos Pendentes:</h2>
        {candidatesPending}
      </Card>
      <Card>
        <h2>Candidatos Aprovados:</h2>
        {approveds}
      </Card>
    </div>
  );
}

export default TripDetailsPage;
