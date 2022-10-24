import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { UsuarioContext } from "./contexts/UsuarioContext";
import { useContext } from "react";


export default function Historico() {
  const {  porcentagem, calcularPorcentagem } =
    useContext(UsuarioContext);
  return (
    <>
      <Header />
      <Container>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Container>
      <Footer porcentagem={porcentagem} />
    </>
  );
}

const Container = styled.div`
      padding: 120px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;
