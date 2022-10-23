import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UsuarioContext } from "./contexts/UsuarioContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Hoje() {
  const [habitosDoDia, setHabitosDoDia] = useState([]);
  const { usuario } = useContext(UsuarioContext);

  useEffect(() => {obterHabitosDoDia()}, []);

  function obterHabitosDoDia() {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => {
      console.log(res.data);
      setHabitosDoDia(res.data);
    });

    promise.catch((error) => {
      console.log(error.message);
    });
  }

  function marcarHabito(id) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };

    const promise = axios.post(URL, {}, config);
    console.log(URL);
    console.log(config);

    promise.then((res) => {
      obterHabitosDoDia()
    });

    promise.catch((error) => {
      console.log(error.message);
    });
  }

  function desmarcarHabito(id) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };

    const promise = axios.post(URL, {}, config);
    console.log(URL);
    console.log(config);

    promise.then((res) => {
      obterHabitosDoDia()
    });

    promise.catch((error) => {
      console.log(error.message);
    });
  }


  return (
    <>
      <Header />
      {habitosDoDia.map((habito) => (
        <Container>
          <BoxLeft>
            <h1>{habito.name}</h1>
            <p>
              Sequência atual: {habito.currentSequence} <br />
              Seu recorde:{habito.highestSequence}
            </p>
          </BoxLeft>
          <BoxRight>
            {habito.done ? (
              <BoxCheck onClick={() => desmarcarHabito(habito.id)}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </BoxCheck>
            ) : (
              <BoxUnCheck onClick={() => marcarHabito(habito.id)}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </BoxUnCheck>
            )}
          </BoxRight>
        </Container>
      ))}
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 340px;
  height: 94px;
  left: 18px;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  background: orange;
  border-radius: 5px;
`;

const BoxLeft = styled.div`
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0px;
    font-size: 12.976px;
    color: #666666;
  }
`;

const BoxRight = styled.div``;

const BoxCheck = styled.button`
  width: 69px;
  height: 69px;
  left: 276px;
  margin-top: 10px;
  background: greenyellow;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  color: #ffffff;
  font-size: 60px;
`;

const BoxUnCheck = styled.button`
  width: 69px;
  height: 69px;
  left: 276px;
  margin-top: 10px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  color: #ffffff;
  font-size: 60px;
`;
