import React from 'react';
import styled from 'styled-components';

export const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

export const ImagemGrande =  styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

export const Titulo =  styled.h4 `
    margin-bottom: 15px;
`

export const Texto = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImagemGrande src={ props.imagem }/>
            <Texto>
                <Titulo>{ props.nome } </Titulo>
                <p>{ props.descricao } </p>
            </Texto>
        </BigCardContainer>
    )
}

export default CardGrande;