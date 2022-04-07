import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CriarPlaylist from './componets/CreatePlaylist';
import { createGlobalStyle } from 'styled-components';
import ListaPlaylist from './componets/getAllPlaylists';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default class App extends React.Component {
  state = {
    telaAtual: "criandoplaylist"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criandoplaylist":
        return <CriarPlaylist irParaLista={this.irParaLista} />
        case "listaMusicas":
        return <ListaPlaylist irParaCriar={this.irParaCriar} />
      default:
        return <div>Erro! Página não encontrada</div> 
    }
  }

  irParaCriar = () => {
    this.setState({ telaAtual: "criarPlaylist" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "listaMusicas" })
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        {this.escolheTela()}
      </div>
    )
  }
}