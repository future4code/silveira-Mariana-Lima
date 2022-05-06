import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Container, Form, Card } from "../inscrever/ApplicationFormstyled";
import ListTripsPage from "../viagens/ListTripsPage";
import "../../styles.css";

function ApplicationFormPage() {
  const { form, onChange, cleanFields } = useForm({
    nome: "",
    idade: "",
    texto: "",
    profissao: "",
    pais: ""
  });
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [texto, setTexto] = useState("");
  const [profissao, setProfissao] = useState("");
  const [pais, setPais] = useState("BRA");
  const [viagens, setViagens] = useState([]);
  const [viagem, setViagem] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const goInscricao = () => {
    navigate("/trips/application");
  };

  const goHome = () => {
    navigate("/");
  };

  const enviar = (event) => {
    event.preventDefault();
    cleanFields();
  };
  const viagensOptions = viagens.map((viagem) => {
    return (
      <option key={viagem.id} value={viagem.id}>
        {viagem.name}
      </option>
    );
  });

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeIdade = (event) => {
    setIdade(Number(event.target.value));
  };
  const onChangeTexto = (event) => {
    setTexto(event.target.value);
  };
  const onChangeProfissao = (event) => {
    setProfissao(event.target.value);
  };
  const onChangePais = (event) => {
    setPais(event.target.value);
  };
  const onChangeViagem = (event) => {
    setViagem(event.target.value);
  };

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/trips"
      )
      .then((resposta) => {
        setViagens(resposta.data.trips);
        setViagem(resposta.data.trips[0].id);
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  const inscrever = () => {
    const body = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: profissao,
      country: pais
    };
    console.log(body);
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariana-mendes-silveira/trips/${viagem}/apply`,
        body
      )
      .then((resposta) => {
        alert("Inscrição feita!");
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);
  return (
    <div>
      <Container className="App">
        <div>
          <h1>Inscreva-se</h1>
        </div>
        <div>
          <button onClick={goHome}> Inicio </button>
        </div>
      </Container>
      <Form className="card" onSubmit={enviar}>
        <Card>
          <div className="input">
            <select onChange={onChangeViagem}>{viagensOptions}</select>
            <input
              placeholder="Nome"
              name={"nome"}
              value={form.name}
              onChange={onChangeNome}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 letras"}
            />
            <input
              placeholder="Idade"
              name={"idade"}
              value={form.age}
              onChange={onChangeIdade}
              required
              type={"number"}
              min={18}
            />
            <input
              placeholder="Texto"
              name={"texto"}
              value={form.applicationText}
              onChange={onChangeTexto}
              required
              min={30}
            />
            <input
              placeholder="Profissão"
              name={"profissao"}
              value={form.profession}
              onChange={onChangeProfissao}
              required
              min={10}
            />
            <select onChange={onChangePais}>
              <option> Afeganistão </option>
              <option> África do Sul </option>
              <option> Albânia </option>
              <option> Alemanha </option>
              <option> Andorra </option>
              <option> Angola </option>
              <option> Antiga e Barbuda </option>
              <option> Argélia </option>
              <option> Argentina </option>
              <option> Arménia </option>
              <option> Austrália </option>
              <option> Áustria </option>
              <option> Azerbaijão </option>
              <option> Bahamas </option>
              <option> Bangladexe </option>
              <option> Barbados </option>
              <option> Barém </option>
              <option> Bélgica </option>
              <option> Belize </option>
              <option> Benim </option>
              <option> Bielorrússia </option>
              <option> Bolívia </option>
              <option> Bósnia e Herzegovina </option>
              <option> Botsuana </option>
              <option> Brasil </option>
              <option> Brunei </option>
              <option> Bulgária </option>
              <option> Burquina Faso </option>
              <option> Burúndi </option>
              <option> Butão </option>
              <option> Cabo Verde </option>
              <option> Camarões </option>
              <option> Camboja </option>
              <option> Canadá </option>
              <option> Catar </option>
              <option> Cazaquistão </option>
              <option> Chade </option>
              <option> Chile </option>
              <option> China </option>
              <option> Chipre </option>
              <option> Colômbia </option>
              <option> Comores </option>
              <option> Congo-Brazzaville </option>
              <option> Coreia do Norte </option>
              <option> Coreia do Sul </option>
              <option> Cosovo </option>
              <option> Costa do Marfim </option>
              <option> Costa Rica </option>
              <option> Croácia </option>
              <option> Cuaite </option>
              <option> Cuba </option>
              <option> Dominica </option>
              <option> Egito </option>
              <option> Emirados Árabes Unidos </option>
              <option> Equador </option>
              <option> Eritreia </option>
              <option> Eslováquia </option>
              <option> Eslovénia </option>
              <option> Espanha </option>
              <option> Estado da Plestina </option>
              <option> Estados Unidos </option>
              <option> Estónia </option>
              <option> Etiópia </option>
              <option> Fiji </option>
              <option> Filipinas </option>
              <option> Finlândia </option>
              <option> França </option>
              <option> Gabão </option>
              <option> Gâmbia </option>
              <option> Gana </option>
              <option> Geógia </option>
              <option> Granada </option>
              <option> Grécia </option>
              <option> Guatemala </option>
              <option> Guiana </option>
              <option> Guiné </option>
              <option> Guiné Equatorial </option>
              <option> Guiné-Bissau </option>
              <option> Haiti </option>
              <option> Honduras </option>
              <option> Hungria </option>
              <option> Iémen </option>
              <option> Ilhas Marechal </option>
              <option> Índia </option>
              <option> Indonésia </option>
              <option> Irão </option>
              <option> Iraque </option>
              <option> Irlanda </option>
              <option> Islândia </option>
              <option> Israel </option>
              <option> Itália </option>
              <option> Jamaica </option>
              <option> Japão </option>
              <option> Jibuti </option>
              <option> Jordânia </option>
              <option> Laus </option>
              <option> Lesoto </option>
              <option> Letónia </option>
              <option> Líbano </option>
              <option> Libéria </option>
              <option> Líbia </option>
              <option> Listenstaine </option>
              <option> Lituânia </option>
              <option> Luxemburgo </option>
              <option> Macedónia do Norte </option>
              <option> Madagáscar </option>
              <option> Malásia </option>
              <option> Maláui </option>
              <option> Maldivas </option>
              <option> Mali </option>
              <option> Malta </option>
              <option> Marrocos </option>
              <option> Maurícia </option>
              <option> México </option>
              <option> Mianmar </option>
              <option> Micronésia </option>
              <option> Moçambique </option>
              <option> Moldávia </option>
              <option> Mónaco </option>
              <option> Mongólia </option>
              <option> Montenegro </option>
              <option> Namíbia </option>
              <option> Nauru </option>
              <option> Nepal </option>
              <option> Nicarágua </option>
              <option> Níger </option>
              <option> Nigéria </option>
              <option> Noruega </option>
              <option> Nova Zelândia </option>
              <option> Omã </option>
              <option> Países Baixos </option>
              <option> Palau </option>
              <option> Panamá </option>
              <option> Papua Nova Guiné </option>
              <option> Paquistão </option>
              <option> Paraguai </option>
              <option> Peru </option>
              <option> Polónia </option>
              <option> Portugal </option>
              <option> Quénia </option>
              <option> Quirguistão </option>
              <option> Quiribáti </option>
              <option> Reino Unido </option>
              <option> República Centro-Africana </option>
              <option> República Checa </option>
              <option> República Democrátia do Congo </option>
              <option> República Dominicana </option>
              <option> Roménia </option>
              <option> Ruanda </option>
              <option> Rússia </option>
              <option> Salomão </option>
              <option> Salvador </option>
              <option> Samoa </option>
              <option> Santa Lúcia </option>
              <option> São Cristovão e Neves </option>
              <option> São Marinho </option>
              <option> São Tomé e Príncipe </option>
              <option> São Vicente e Granadinas </option>
              <option> Seicheles </option>
              <option> Senegal </option>
              <option> Serra Leoa </option>
              <option> Sévia </option>
              <option> Singapura </option>
              <option> Síria </option>
              <option> Somália </option>
              <option> Sri Lanca </option>
              <option> Sudão</option>
              <option> Sudão do Sul </option>
              <option> Suécia </option>
              <option> Suiça </option>
              <option> Suriname </option>
              <option> Tailândia </option>
              <option> Taiuâ </option>
              <option> Tajiquistão </option>
              <option> Tanzânia </option>
              <option> Timor-Leste </option>
              <option> Togo </option>
              <option> Tonga </option>
              <option> Trindade e Tobago </option>
              <option> Tunísia </option>
              <option> Turcomenistão </option>
              <option> Turquia </option>
              <option> Tuvalu </option>
              <option> Ucrânia </option>
              <option> Uganda </option>
              <option> Uruguai </option>
              <option> Usbequistão </option>
              <option> Vanuatu </option>
              <option> Vaticano </option>
              <option> Venezuela </option>
              <option> Vietname </option>
              <option> Zâmbia </option>
              <option> Zimbábue </option>
            </select>
          </div>
        </Card>
        <div className="button3">
          <button onClick={inscrever}>Enviar</button>
        </div>
      </Form>
    </div>
  );
}

export default ApplicationFormPage;
