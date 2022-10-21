import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Habitos() {
  return (
    <>
      <Header />
      <Container>
        <h1>Meus Habitos</h1>
        <Botao>+</Botao>
      </Container>
      <Paragrafo>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a Trackear!
      </Paragrafo>
      <Footer/>
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
`;

const Paragrafo = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
   color: #666666;
`;
