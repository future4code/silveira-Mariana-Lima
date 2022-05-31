import React, { useState, useEffect } from "react";
import Headers from "../../components/Header";
import { Card, Button, Container } from "./PostStyled";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useNavigate } from "react-router-dom";
import { goToLogin, goToFeed } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectPage";

function PostPage() {
    useProtectedPage();
    const [comentarios, setComentarios] = useState([])
    const { form, onChange, clear } = useForm({ texto: "", body: "", direction: "" })
    const params = useParams();
    const navigate = useNavigate();

    const post = (event) => {
        event.preventDefault()
        listarcomentarios()
    }

    const listarcomentarios = () => {

        const token = localStorage.getItem("token");
        axios
            .get(`${BASE_URL}/posts/${params.id}/comments`,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((resposta) => {

                setComentarios(resposta.data)
              

            })
            .catch((erro) =>
                console.log(erro.response)
            )
    }

    useEffect(() => {
        listarcomentarios()
    }, []);

    const comentar = () => {
        const token = localStorage.getItem("token");

        axios
            .post(`${BASE_URL}/posts/${params.id}/comments`, form,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {

                listarcomentarios()
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const createcommentvote = (id) => {
        const token = localStorage.getItem("token");
        const body = {
            direction: 1
        }
        axios
            .post(`${BASE_URL}/comments/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {
                listarcomentarios()
              
            })
            .catch((erro) =>
                console.log(erro)
            )
    }
    const changecommentvote = (id) => {
        const token = localStorage.getItem("token");
        const body = {
            direction: -1
        }
        axios
            .put(`${BASE_URL}/comments/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            .then((resposta) => {
                listarcomentarios()
                
            })
            .catch((erro) =>
                console.log(erro)
            )

    }
   

    const goLogout = () => {
        localStorage.removeItem("token")
        alert("Logout feito!!")
        goToLogin(navigate);
    }

    const listadecomentarios = comentarios.map((comentario) => {
        return <Card key={comentario.id}>
            <p><b>Usuário:</b> {comentario.username}</p>
            <p><b>Comentário:</b> {comentario.body}</p>
            <p>
            <b>Curtir:</b>
                <ArrowUpwardIcon alt={'IconeMais'} onClick={() => createcommentvote(comentario.id)} />

                {comentario.userVote}
                <ArrowDownwardIcon alt={'Iconemenos'} onClick={() =>changecommentvote(comentario.id)}/>
            </p>

        </Card>
    })

    return (
        <div>
            <Headers />
            <Container>


                <div onSubmit={post}>

                    <textarea
                        placeholder="Escreva seu comentário"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"body"}
                        variant={"outlined"}
                        type={"body"}
                    >

                    </textarea>
                    <br />
                    <Button onClick={comentar}>Comentar</Button>
                </div>
                {listadecomentarios}
                <div>
                    <Button onClick={()=> goToFeed(navigate)}>Voltar</Button>
                </div>
            </Container>
        </div>
    )
}

export default PostPage;