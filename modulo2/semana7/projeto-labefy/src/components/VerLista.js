import React from "react";
import axios from "axios";
import CriarLista from "./Criarlista";

export default class VerLista extends React.Component {
  state = {
    mudarTela: "verlista",
    inputValueNome: "",
    inputValueArtista: "",
    inputValuelink: ""
  };

  handleInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleInputNome = (event) => {
    this.setState({ inputValueNome: event.target.value });
  };
  handleInputArtista = (event) => {
    this.setState({ inputValueArtista: event.target.value });
  };
  handleInputLink = (event) => {
    this.setState({ inputValuelink: event.target.value });
  };

  mudarDeTela = (nomeDaTela) => {
    this.setState({ mudarTela: nomeDaTela });
  };

  componentDidMount() {
    this.verPlaylist();
    this.setState({ mudarTela: "verlista" });
  }

  verPlaylist = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    try {
      const resposta = await axios.get(url, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        }
      });

      this.setState({ resposta: resposta.data });
    } catch (error) {
      alert("Ocorreu um erro ao criar a lista, tente novamente!");
    }
  };

  removerLista = (event) => {
    console.log(event.target.dataset.id);
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.dataset.id}`;
    const axiosConfig = {
      headers: { Authorization: "mariana-mendes-silveira" },
      params: { playlistId: event.target.dataset.id }
    };
    axios
      .delete(url, axiosConfig)
      .then((resposta) => {
        alert("Removido!");
        this.verPlaylist();
      })
      .catch((erro) => {
        alert("Erro!!");
        console.log(erro.response);
      });
  };

  detalheDaLista = async (event) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.dataset.id}/tracks`;

    try {
      const resposta = await axios.get(url, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        },
        params: {
          playlistId: event.target.dataset.id
        }
      });
      this.setState({ musicas: resposta.data });
      this.setState({ mudarTela: "verdetalhes" });
      this.setState({ nomeplaylist: event.target.dataset.nome });
      this.setState({ idplaylist: event.target.dataset.id });
    } catch (error) {
      alert("Ocorreu um erro ao visualizar a lista, tente novamente!");
    }
  };

  adicionarMusica = async (event) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idplaylist}/tracks`;
    const body = {
      name: this.state.inputValueNome,
      artist: this.state.inputValueArtista,
      url: this.state.inputValuelink
    };

    try {
      const respostaDaMusica = await axios.post(url, body, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        },
        params: {
          playlistId: event.target.dataset.id
        }
      });

      this.setState({ musicas: respostaDaMusica.data });

      this.setState({ inputValueNome: "" });
      this.setState({ inputValueArtista: "" });
      this.setState({ inputValuelink: "" });
    } catch (error) {
      alert("Ocorreu um erro ao adicionar a música, tente novamente!");
    }
  };

  render() {
    const listaPlayList = this.state?.resposta?.result?.list.map((playlist) => {
      return (
        <div key={playlist.id}>
          {" "}
          <h3>{playlist.name}</h3>
          <button
            data-id={playlist.id}
            data-nome={playlist.name}
            onClick={this.detalheDaLista}
          >
            Abrir Playlist
          </button>
          <button data-id={playlist.id} onClick={this.removerLista}>
            Deletar
          </button>{" "}
        </div>
      );
    });

    const musicaList = this.state?.musicas?.result?.tracks.map((musica) => {
      return (
        <div key={musica.id}>
          {" "}
          <h3>Música:</h3> <p>{musica.name}</p>
          <audio controls autoplay>
            <source src={musica.url} type="audio/mpeg" />
          </audio>
        </div>
      );
    });

    const nomeplaylist = () => {
      if (this.state.mudarTela === "verdetalhes") {
        return (
          <>
            <h3>{this.state.nomeplaylist}</h3>
            <input
              placeholder="Nome da música"
              value={this.state.inputValueNome}
              onChange={this.handleInputNome}
            ></input>
            <input
              placeholder="Nome do cantor"
              value={this.state.inputValueArtista}
              onChange={this.handleInputArtista}
            ></input>
            <input
              placeholder="Link da música"
              value={this.state.inputValuelink}
              onChange={this.handleInputLink}
            ></input>
            <button onClick={this.adicionarMusica}>Adicionar música</button>
          </>
        );
      }
    };

    return (
      <div className="App">
        <h1>
          {this.state.mudarTela === "verlista" ? "Ver Listas" : "Ver Detalhes"}
        </h1>
        {nomeplaylist()}
        {this.state.mudarTela === "verlista" ? listaPlayList : musicaList}
      </div>
    );
  }
}
