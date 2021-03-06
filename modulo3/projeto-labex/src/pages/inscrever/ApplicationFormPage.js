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
        alert("Inscri????o feita!");
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
              title={"O nome deve ter no m??nimo 3 letras"}
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
              placeholder="Profiss??o"
              name={"profissao"}
              value={form.profession}
              onChange={onChangeProfissao}
              required
              min={10}
            />
            <select onChange={onChangePais}>
              <option> Afeganist??o </option>
              <option> ??frica do Sul </option>
              <option> Alb??nia </option>
              <option> Alemanha </option>
              <option> Andorra </option>
              <option> Angola </option>
              <option> Antiga e Barbuda </option>
              <option> Arg??lia </option>
              <option> Argentina </option>
              <option> Arm??nia </option>
              <option> Austr??lia </option>
              <option> ??ustria </option>
              <option> Azerbaij??o </option>
              <option> Bahamas </option>
              <option> Bangladexe </option>
              <option> Barbados </option>
              <option> Bar??m </option>
              <option> B??lgica </option>
              <option> Belize </option>
              <option> Benim </option>
              <option> Bielorr??ssia </option>
              <option> Bol??via </option>
              <option> B??snia e Herzegovina </option>
              <option> Botsuana </option>
              <option> Brasil </option>
              <option> Brunei </option>
              <option> Bulg??ria </option>
              <option> Burquina Faso </option>
              <option> Bur??ndi </option>
              <option> But??o </option>
              <option> Cabo Verde </option>
              <option> Camar??es </option>
              <option> Camboja </option>
              <option> Canad?? </option>
              <option> Catar </option>
              <option> Cazaquist??o </option>
              <option> Chade </option>
              <option> Chile </option>
              <option> China </option>
              <option> Chipre </option>
              <option> Col??mbia </option>
              <option> Comores </option>
              <option> Congo-Brazzaville </option>
              <option> Coreia do Norte </option>
              <option> Coreia do Sul </option>
              <option> Cosovo </option>
              <option> Costa do Marfim </option>
              <option> Costa Rica </option>
              <option> Cro??cia </option>
              <option> Cuaite </option>
              <option> Cuba </option>
              <option> Dominica </option>
              <option> Egito </option>
              <option> Emirados ??rabes Unidos </option>
              <option> Equador </option>
              <option> Eritreia </option>
              <option> Eslov??quia </option>
              <option> Eslov??nia </option>
              <option> Espanha </option>
              <option> Estado da Plestina </option>
              <option> Estados Unidos </option>
              <option> Est??nia </option>
              <option> Eti??pia </option>
              <option> Fiji </option>
              <option> Filipinas </option>
              <option> Finl??ndia </option>
              <option> Fran??a </option>
              <option> Gab??o </option>
              <option> G??mbia </option>
              <option> Gana </option>
              <option> Ge??gia </option>
              <option> Granada </option>
              <option> Gr??cia </option>
              <option> Guatemala </option>
              <option> Guiana </option>
              <option> Guin?? </option>
              <option> Guin?? Equatorial </option>
              <option> Guin??-Bissau </option>
              <option> Haiti </option>
              <option> Honduras </option>
              <option> Hungria </option>
              <option> I??men </option>
              <option> Ilhas Marechal </option>
              <option> ??ndia </option>
              <option> Indon??sia </option>
              <option> Ir??o </option>
              <option> Iraque </option>
              <option> Irlanda </option>
              <option> Isl??ndia </option>
              <option> Israel </option>
              <option> It??lia </option>
              <option> Jamaica </option>
              <option> Jap??o </option>
              <option> Jibuti </option>
              <option> Jord??nia </option>
              <option> Laus </option>
              <option> Lesoto </option>
              <option> Let??nia </option>
              <option> L??bano </option>
              <option> Lib??ria </option>
              <option> L??bia </option>
              <option> Listenstaine </option>
              <option> Litu??nia </option>
              <option> Luxemburgo </option>
              <option> Maced??nia do Norte </option>
              <option> Madag??scar </option>
              <option> Mal??sia </option>
              <option> Mal??ui </option>
              <option> Maldivas </option>
              <option> Mali </option>
              <option> Malta </option>
              <option> Marrocos </option>
              <option> Maur??cia </option>
              <option> M??xico </option>
              <option> Mianmar </option>
              <option> Micron??sia </option>
              <option> Mo??ambique </option>
              <option> Mold??via </option>
              <option> M??naco </option>
              <option> Mong??lia </option>
              <option> Montenegro </option>
              <option> Nam??bia </option>
              <option> Nauru </option>
              <option> Nepal </option>
              <option> Nicar??gua </option>
              <option> N??ger </option>
              <option> Nig??ria </option>
              <option> Noruega </option>
              <option> Nova Zel??ndia </option>
              <option> Om?? </option>
              <option> Pa??ses Baixos </option>
              <option> Palau </option>
              <option> Panam?? </option>
              <option> Papua Nova Guin?? </option>
              <option> Paquist??o </option>
              <option> Paraguai </option>
              <option> Peru </option>
              <option> Pol??nia </option>
              <option> Portugal </option>
              <option> Qu??nia </option>
              <option> Quirguist??o </option>
              <option> Quirib??ti </option>
              <option> Reino Unido </option>
              <option> Rep??blica Centro-Africana </option>
              <option> Rep??blica Checa </option>
              <option> Rep??blica Democr??tia do Congo </option>
              <option> Rep??blica Dominicana </option>
              <option> Rom??nia </option>
              <option> Ruanda </option>
              <option> R??ssia </option>
              <option> Salom??o </option>
              <option> Salvador </option>
              <option> Samoa </option>
              <option> Santa L??cia </option>
              <option> S??o Cristov??o e Neves </option>
              <option> S??o Marinho </option>
              <option> S??o Tom?? e Pr??ncipe </option>
              <option> S??o Vicente e Granadinas </option>
              <option> Seicheles </option>
              <option> Senegal </option>
              <option> Serra Leoa </option>
              <option> S??via </option>
              <option> Singapura </option>
              <option> S??ria </option>
              <option> Som??lia </option>
              <option> Sri Lanca </option>
              <option> Sud??o</option>
              <option> Sud??o do Sul </option>
              <option> Su??cia </option>
              <option> Sui??a </option>
              <option> Suriname </option>
              <option> Tail??ndia </option>
              <option> Taiu?? </option>
              <option> Tajiquist??o </option>
              <option> Tanz??nia </option>
              <option> Timor-Leste </option>
              <option> Togo </option>
              <option> Tonga </option>
              <option> Trindade e Tobago </option>
              <option> Tun??sia </option>
              <option> Turcomenist??o </option>
              <option> Turquia </option>
              <option> Tuvalu </option>
              <option> Ucr??nia </option>
              <option> Uganda </option>
              <option> Uruguai </option>
              <option> Usbequist??o </option>
              <option> Vanuatu </option>
              <option> Vaticano </option>
              <option> Venezuela </option>
              <option> Vietname </option>
              <option> Z??mbia </option>
              <option> Zimb??bue </option>
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
