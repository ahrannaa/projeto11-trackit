import logo from "./img/logo.jpg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UsuarioContext } from "./contexts/UsuarioContext";
import axios from "axios";

export default function Login() {
  const { setUsuario } = useContext(UsuarioContext);
  const [loginInfo, setLoginInfo] = useState({
    password: "",
    email: "",
  });

  let navigate = useNavigate();

  const LOGIN_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  const handleInputChange = (event) => {
    const input = event.target;
    const inputName = input.name;
    const inputValue = input.value;

    setLoginInfo((oldFormInfo) => ({
      ...oldFormInfo,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logarUsuario();

    // chamr a API de login
    // dentro do then da promise
  };

  const logarUsuario = () => {
    const promise = axios.post(LOGIN_URL, loginInfo);

    promise.then((resposta) => {
      // api retorna um usuario
      setUsuario(resposta.data);
      navigate("../habitos", { replace: true });
    });

    promise.catch((error) =>
      console.log("DEU RUIM LOGIN: " + error.response.data)
    );
  };

  return (
    <>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <form onSubmit={handleSubmit}>
        <Container>
          <Email
            type="text"
            name="email"
            id="email"
            value={loginInfo.email}
            onChange={handleInputChange}
            placeholder="email"
          ></Email>
          <Senha
            type="text"
            name="password"
            id="password"
            value={loginInfo.password}
            onChange={handleInputChange}
            placeholder="senha"
          ></Senha>
          <Botao type="submit">Entrar</Botao>
          <StyleLink>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
          </StyleLink>
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

const Email = styled.input`
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

const Senha = styled.input`
  width: 303px;
  height: 45px;
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

const StyleLink = styled.div`
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
