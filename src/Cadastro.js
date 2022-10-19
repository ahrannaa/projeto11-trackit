import logo from "./img/logo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cadastro(){
  return( 
    <>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Container>
        <Input placeholder="email"></Input>
        <Input placeholder="senha"></Input>
        <Input placeholder="nome"></Input>
        <Input placeholder="foto"></Input>
        <Botao>Cadastrar</Botao>
        <Teste>
          <Link to="/">
            Já tem uma conta? Faça login!
          </Link>
        </Teste>
      </Container>
    </>
    )
}

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 106.8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ::placeholder {
    font-size: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    padding: 10px;
  }
`;

const Botao = styled.button`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  color: #ffffff;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
`;

const Teste = styled.div`
    padding:20px;
   
  a {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
