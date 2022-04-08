import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class getAllPlaylist extends React.Component {
  state = {
    playlist: []
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  pegarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        }
      })
      .then((res) => {
        this.setState({ playlist: res.data.result.list });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente");
      });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "mariana-mendes-silveira"
        }
      })

      .then((res) => {
        alert("Playlist deletada com sucesso!");
        this.pegarPlaylist();
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
  };

  render() {
    const listaMusicas = this.state.playlist.map((user) => {
      return (
        <div key={user.id}>
          {user.name}
          <button onClick={() => this.deletarPlaylist(user.id)}>X</button>
        </div>
      );
    });

    return (
      <div>
        <h2>Veja suas Playlists aqui 🎧</h2>
        {listaMusicas}
      </div>
    );
  }
}
