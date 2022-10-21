import logo from "./img/logo.jpg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    password: "",
    email: "",
    image:""
  });

  let navigate = useNavigate();

  const CADASTRO_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  const handleInputChange = (event) => {
    const input = event.target;
    const inputName = input.name; 
    const inputValue = input.value; 

    setFormInfo((oldFormInfo) => ({
      ...oldFormInfo,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cadastrarUsuario()
  };

  const cadastrarUsuario = () => {
    console.log(JSON.stringify(formInfo))
    const promise = axios.post(CADASTRO_URL, formInfo);

    promise.then((resposta) => {
      console.log("FUNCIONOU: " + JSON.stringify(resposta.data));
      navigate("../", { replace: true });
    });

    promise.catch((error) => console.log("DEU RUIM: " + error.response.data));
  };

  return (
    <>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <form onSubmit={handleSubmit}>
        <Container>
          <Input
            type="email"
            name="email"
            id="email"
            value={formInfo.email}
            onChange={handleInputChange}
            placeholder="email"
          ></Input>
          <Input
            type="password"
            name="password"
            id="password"
            value={formInfo.password}
            onChange={handleInputChange}
            placeholder="senha"
          ></Input>
          <Input
            type="text"
            name="name"
            id="name"
            value={formInfo.name}
            onChange={handleInputChange}
            placeholder="nome"
          ></Input>
          <Input
            type="text"
            name="image"
            id="image"
            value={formInfo.image}
            onChange={handleInputChange}
            placeholder="foto"
          ></Input>
          <Botao type="submit">Cadastrar</Botao>
          <Teste>
            <Link to="/">Já tem uma conta? Faça login!</Link>
          </Teste>
        </Container>
      </form>
    </>
  );
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
  padding: 20px;

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
