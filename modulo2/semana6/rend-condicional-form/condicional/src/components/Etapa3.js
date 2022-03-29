import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {

    render() {

        return (
        <div>
            <h3>ETAPA 3 - INFORMAÇÃO GERAIS DE ENSINO</h3>
             <div>
            <p>7. Por que você não terminou um curso de graduação?</p><input/>
            <p>8. Você fez algum curso complementar</p><select>
            <option velue="Nenhuma">Nenhuma</option>
            <option velue="Curso Técnico">Curso de Técnico</option>
            <option velue="Curso de Inglês">Curso de Inglês</option>
            </select>
        </div>
     
    </div>

    );
  }
}