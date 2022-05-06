import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import TripDetailsPage from "../detalhes/TripDeatailsPage";
import {
  Container,
  Button,
  Card,
  DivCard,
  Button2
} from "../pageadmin/AdminHomestyled";
import "../../styles.css";

const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/login");
    }
  }, []);
};

function AdminHomePage() {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const [viagens, setViagens] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const goCreate = () => {
    navigate("/admin/trips/create");
  };

  const goDetails = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/trips",
        {
          headers: {
            auth: token
          }
        }
      )
      .then((resposta) => {
        setViagens(resposta.data.trips);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);
  const removeTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-silveira/trips/${id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((resposta) => {
        //   viagens.splice( id, 1)
        getTrips();
        console.log("removeu");
        // navigate("/admin/trips/list");
      })
      .catch((erro) => {
        alert("Ops! Algo deu errado");
        console.log(erro.response);
      });
  };

  const listarViagens = viagens.map((viagem) => {
    return (
      <Card key={viagem.id}>
        <p>
          <b>Nome:</b> {viagem.name}
        </p>
        <Button2>
          <button onClick={() => goDetails(viagem.id)}>Detalhes</button>
          <button type="button" onClick={() => removeTrip(viagem.id)}>
            Deleta
          </button>
        </Button2>
      </Card>
    );
  });

  return (
    <div>
      <Container className="App">
        <div>
          <p>Painel Administrativo</p>
        </div>
        <div className="button3">
          <div>
            <Button onClick={goHome}>Inicio</Button>
          </div>
          <div>
            <Button onClick={goCreate}>Criar Viagem</Button>
          </div>
          <div>
            <Button onClick={goLogout}>Sair</Button>
          </div>
        </div>
      </Container>
      <DivCard>{listarViagens}</DivCard>
    </div>
  );
}

export default AdminHomePage;
