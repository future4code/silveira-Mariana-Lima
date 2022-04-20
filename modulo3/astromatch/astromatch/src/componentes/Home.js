
import axios from "axios";
import { useEffect, useState } from "react";
import App from "../App";
import styled from "styled-components"



const Header = styled.div`
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    width: 20%;
    height: 40%;
    margin-top: 20px;
`

const Card = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`

const CardPessoa = styled.div`
    width:50%;
    height: 300px;
    border-style: groove;
    background-size: 100% 100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: Helvetica;
    color: black;
    text-shadow: 0 0 2px white;
`



export default function Match(props) {

    const [listaPessoas, setListaPessoas] = useState([])
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("");
    const [bio, setBio] = useState("");
    const [age, setAge] = useState(0);
    const [id, setId] = useState([]);

    const getProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mariana/person')
            .then((resposta) => {

                setFoto(resposta.data.profile.photo)
                setName(resposta.data.profile.name)
                setBio(resposta.data.profile.bio)
                setAge(resposta.data.profile.age)
                setId(resposta.data.profile.id)
                setListaPessoas(resposta.data.profile)
            }).catch((erro) => {
                console.log(erro.message);
            })
    }
    const postChoosePerson = () => {
        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mariana/choose-person')
            .then(() => {
                getProfile()
            }).catch((erro) => {
                console.log(erro.response);

            })
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <Header>
                <h2>AstroMatch</h2>
                <Button onClick={() => props.mudarParaMatch()}>Home</Button>
            </Header>
            <Card>
                <CardPessoa style={{ backgroundImage: `url(${foto})` }}>
                    <h3>{name}, {age}</h3>
                    <p>{bio}</p>
                </CardPessoa>
            </Card>
            <div>
                <button onClick={() => postChoosePerson(false)}>✖</button>
                <button onClick={() => postChoosePerson(true)}>❤</button>
            </div>
        </>
    )
}