import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CadastrarHabito from "./components/CadastrarHabito";
import Habito from "./components/Habito";
import axios from "axios";
import { UsuarioContext } from "./contexts/UsuarioContext";

export default function MeusHabitos(props) {
  const { usuario } = useContext(UsuarioContext);
  const [showCadastrarHabito, setShowCadastrarHabito] = useState("false");
  const [habitos, setHabitos] = useState([]);

  function addHabito() {
    setShowCadastrarHabito("false");
    obterHabitos();
  }

  useEffect(() => {
    obterHabitos();
  }, []);

  function obterHabitos() {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${usuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => {
      console.log(res.data);
      setHabitos(res.data);
    });

    promise.catch((error) => {
      console.log(error.message);
    });
  }

  const paragrafo = (
    <Paragrafo>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
      começar a Trackear!
    </Paragrafo>
  );

  function deletar(id) {
    if (window.confirm("Deseja realmente apagar esse hábito?")) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

      const config = {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      };

      const promise = axios.delete(URL, config, {});

      promise.then((res) => {
        const novosHabitos = habitos.filter((habito) => habito.id !== id);
        setHabitos(novosHabitos);
      });
    } 
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Meus Habitos</h1>
        <Botao onClick={() => setShowCadastrarHabito("true")}>+</Botao>
      </Container>
      {showCadastrarHabito === "false" && habitos.length === 0 ? paragrafo : ""}
      {showCadastrarHabito === "true" ? (
        <CadastrarHabito onClick={addHabito} />
      ) : (
        <></>
      )}
      {habitos.map((habito) => (
        <Habito
          onDelete={() => deletar(habito.id)}
          name={habito.name}
          days={habito.days}
        />
      ))}
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 98px;
  justify-content: space-between;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const Botao = styled.button`
  display: inline;
  width: 40px;
  height: 35px;
  left: 317px;
  top: 92px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  margin-right: 50px;
  margin-top: 10px;
  color: #ffffff;
  font-size: 30px;
  cursor: pointer;
`;

const Paragrafo = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
  margin-top: 20px;
`;
