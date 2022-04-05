import React from 'react'
import styled from 'styled-components'

export const ContainerCard= styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`
export const Tamanho = styled.img`
    width: 30px;
    margin-right: 10px;
`
function CardPequeno(props) {
  return (
    <ContainerCard>
      <Tamanho src={ props.imagem } />
      <h4> {props.nome} </h4>
      <p> { props.texto } </p>
    </ContainerCard>
  )
}

export default CardPequeno;