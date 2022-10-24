import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { ThreeDots } from "react-loader-spinner";

export default function CadastrarHabito(props) {
  const [diaIndexes, setDiaIndexes] = useState([]); // [0,6]
  const [name, setName] = useState("");
  const { usuario } = useContext(UsuarioContext);
  const [carregando, setCarregando] = useState("false");
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  const HABITOS_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  const body = {
    name,
    days: diaIndexes,
  };

  function selecionarDia(index) {
    // 6
    if (diaIndexes.includes(index)) {
      // 6
      setDiaIndexes((selecionado) => [
        ...selecionado.filter((i) => i !== index),
      ]);
    } else {
      setDiaIndexes((selecionado) => [...selecionado, index]);
    }
  }

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    cadastrarHabito();
  };

  const cadastrarHabito = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };
    const promise = axios.post(HABITOS_URL, body, config);

    console.log(body);
    console.log(config);

    promise.then((resposta) => {
      console.log("FUNCIONOU: " + JSON.stringify(resposta.data));
      setCarregando("false");
      props.onClick();
    });

    promise.catch((error) => {
      setCarregando("false");
      alert(error.response.data.message);
    });
  };

  let salvarHabito = <Botao type="submit">Salvar</Botao>;

  if (carregando === "true") {
    salvarHabito = (
      <Botao type="submit" disabled>
        <Spinner>
          <ThreeDots
            height="20"
            width="20"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Spinner>
      </Botao>
    );
  }

  return (
    <form onSubmit={inputSubmit}>
      <BigBox>
        <Container>
          <input data-identifier="input-habit-name"
            disabled={carregando === "false" ? false : true}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="nome do hábito"
          ></input>
          <Dias data-identifier="week-day-btn">
            {dias.map((letra, index) =>
              diaIndexes.includes(index) ? (
                <DiaSelecionado onClick={() => selecionarDia(index)}>
                  {letra}
                </DiaSelecionado>
              ) : (
                <Dia onClick={() => selecionarDia(index)}>{letra}</Dia>
              )
            )}
          </Dias>
          <Box>
            <Botao onClick={props.onCancelar} data-identifier="cancel-habit-create-btn">Cancelar</Botao>
            {salvarHabito}
          </Box>
        </Container>
      </BigBox>
    </form>
  );
}

const Container = styled.div`
  width: 340px;
  height: 180px;
  left: 17px;
  margin-bottom: 10px;
  background: #b7d5e5;
  border-radius: 5px;

  input {
    width: 303px;
    height: 45px;
    margin-left: 16px;
    margin-top: 20px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    ::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      padding: 10px;
    }
  }
`;

const BigBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Dias = styled.div`
  display: flex;
  margin-left: 18px;
  margin-top: 10px;
`;
const Dia = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
`;

const DiaSelecionado = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cfcfcf;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 30px;
  margin-top: 20px;
`;

const Botao = styled.button`
  width: 84px;
  height: 35px;
  left: 257px;
  margin-left: 3px;
  top: 277px;
  color: #ffffff;
  border: none;
  background: #52b6ff;
  border-radius: 4.63636px;
  cursor: pointer;
`;

const Spinner = styled.div`
  height: 20x;
  width: 20px;
  margin: 0 auto;
`;
