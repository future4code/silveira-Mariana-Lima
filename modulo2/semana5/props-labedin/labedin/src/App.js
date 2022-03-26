import React from 'react';
import styled from 'styledcomponents';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

export const GlobalEscopo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
export const PageContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
  text-align: center;
  margin-bottom: 20px;
`
export const TitulosHdois = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

`

function App() {
  return (

    <GlobalEscopo>
      <PageContainer> 
        <TitulosHdois> Dados Pessoais</TitulosHdois>
          <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Mariana Mendes de Lima" 
          descricao="Oi, eu sou Mariana. Sou aluna da Labenu, estou estudando Front-end."
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem='https://w7.pngwing.com/pngs/255/760/png-transparent-black-location-icon-illustration-computer-icons-adress-miscellaneous-desktop-wallpaper-location.png'
          tipo='Endereço'
          descricao=" Rua Jornalista Nelson Rodrigues, 15"
        />
        
      </PageContainer>

      <PageContainer>
        <TitulosHdois>Formação e Experincias</TitulosHdois>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
      </PageContainer>

      <PageContainer>
        <TitulosHdois>Minhas redes sociais</TitulosHdois>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter"
        />

      </PageContainer>

    </GlobalEscopo>
  );
}        

export default App;
