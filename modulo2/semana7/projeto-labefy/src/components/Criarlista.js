import axios from "axios";
import React from "react";
import VerLista from "./VerLista";

export default class CriarLista extends React.Component {
  state = {
    listas: [],
    inputValue: ""
  };

  handleInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criarNovaLista = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = { name: this.state.inputValue };

    try {
      const resposta = await axios.post(url, body, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        }
      });
      alert("PlayList criada com sucesso!");
      this.setState({ inputValue: "" });
    } catch (error) {
      alert("Esse nome de lista já existe!");
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Criar PlayList</h1>
        <input
          placeholder="Nome Da Playlist"
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
        <button onClick={this.criarNovaLista}>Criar</button>
      </div>
    );
  }
}
