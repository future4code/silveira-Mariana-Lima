import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-around;
` 

const ButtonVoltar = styled.button`
    width: 40%;
    height: 60%;
    margin-top: 15px;
`

const CardPessoa = styled.div`
    width: 60%;
` 

const Descrição = styled.div`
    display: flex;
    border-style: groove;
    width: 99%;
`

const Image = styled.img`
    width: 40px;
`



export default function Home(props) {

    const [listaDeMatch, setListaDeMatch] = useState([])

    const getMatch = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mariana/matches')
            .then((response) => {
                setListaDeMatch(response.data.matches)
            }).catch((erro) => {
                console.log(erro);

            })
    }


    const putMatch = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mariana/clear')
            .then((res) => {
                getMatch()
                console.log("Limpou")
            }).catch((erro) => {
                console.log(erro.response);
            })
    }

    useEffect(() => {
        getMatch();
    }, []);

    return (
        <>
            <Header>
                <h2>Matches</h2>
                <ButtonVoltar onClick={props.mudarParaHome}> Voltar </ButtonVoltar>
            </Header>
            <CardPessoa>
                {listaDeMatch.map((pessoa) => {
                    return <Descrição>
                       <Image src={pessoa.photo} />
                        <p>{pessoa.name}</p>
                    </Descrição>
                })}
            </CardPessoa>
            <div>
                <button onClick={putMatch}>Limpar Match</button>
            </div>
        </>
    )

} 