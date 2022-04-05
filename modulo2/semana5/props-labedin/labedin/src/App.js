import React from "react";
import styled from "styled-components";
import CardGrande from "./componets/CardGrande/CardGrande.js";
import ImagemButton from "./componets/ImagemButton/ImagemButton";
import CardPequeno from "./componets/CartãoPequeno/CardPequeno"

export const GlobalEscopo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
export const Pagina = styled.div `
  width: 40vw;
  margin: 10px 0;
  text-align: center;
  margin-bottom: 20px;
`
export const Titulo= styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <GlobalEscopo>
    <Pagina>
      <Titulo> Dados pessoais </Titulo>
      
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Mariana Mendes"
          descricao="Oi, eu sou Mariana. Sou aluna da Labenu."
        />

         <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png"
          texto="Ver mais"
        />

          <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1264/1264791.png"
          nome = "Endereço:"
          texto="Rua Jornalista Nelson Rodrigues, 15"
        />
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/552/552486.png"
          nome = "Email:"
          texto="filhatronix@gmail.com"
        />
    </Pagina>
    <Pagina>
      <Titulo> Experiências profissionais </Titulo>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao=" Aluna de Web Full Stack"
        />

        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          nome="NASA"
          descricao="Apontando defeitos."
        />
    </Pagina>
    <Pagina>
      <Titulo> Minhas redes sociais </Titulo>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
    </Pagina>
    </GlobalEscopo>
  );
}

export default App;
