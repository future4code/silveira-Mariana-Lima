import React from "react";
import axios from "axios";
import CriarLista from "./components/Criarlista";
import VerLista from "./components/VerLista";
//import styled from "styled-components";

export default class App extends React.Component {
  state = {
    mudarTela: "criarlista"
  };

  selectPage = () => {
    switch (this.state.mudarTela) {
      case "criarlista":
        return <CriarLista />;
      case "verlista":
        return <VerLista />;

      default:
        return <CriarLista />;
    }
  };

  mudarDeTela = (nomeDaTela) => {
    this.setState({ mudarTela: nomeDaTela });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.mudarDeTela("criarlista")}>
          Criar Playlist
        </button>
        <button onClick={() => this.mudarDeTela("verlista")}>
          Ver Playlist
        </button>
        {this.selectPage()}
      </div>
    );
  }
}
