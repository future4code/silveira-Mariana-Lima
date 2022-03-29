import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {

  render() {

    return (
    <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
            <p>1. Qual o seu nome?</p><input/>
            <p>2. Qual sua idade?</p><input/>
            <p>3. Qual seu e-mail?</p><input/>
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option value="Emsino médio incompleto">"Ensino médio incompleto"
                </option>
                <option value="Emsino médio incompleto">"Ensino médio completo"
                </option>
                <option value="Emsino médio incompleto">"Ensino superior incompleto"
                </option>
                <option value="Emsino médio incompleto">"Ensino superior completo"
                </option>
            </select>

        </div>
     
    </div>
    );
  }
}