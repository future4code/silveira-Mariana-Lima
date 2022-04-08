import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class CreatePlaylist extends React.Component {
  state = {
    nome: ""
  };

  handleNomePlaylist = (event) => {
    this.setState({ nome: event.target.value });
  };

  criarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nome
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        }
      })

      .then((res) => {
        alert("Playlist criada com sucesso!");
        this.setState({ nome: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <h2>Crie suas Playlists</h2>
        <input
          placeholder={"Nome da sua Playlist"}
          value={this.state.nome}
          onChange={this.handleNomePlaylist}
        />
        <button onClick={this.criarPlaylist}>Criar Playlists</button>
        <button onClick={this.props.irParaLista}>Minhas Playlists</button>
      </div>
    );
  }
}
