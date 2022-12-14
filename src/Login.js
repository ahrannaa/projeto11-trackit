import logo from "./img/logo.jpg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UsuarioContext } from "./contexts/UsuarioContext";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Login() {
  const { setUsuario } = useContext(UsuarioContext);
  const [carregando, setCarregando] = useState("false");
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
    setCarregando("true")
    logarUsuario();
  };

  const logarUsuario = () => {
    const promise = axios.post(LOGIN_URL, loginInfo);

    promise.then((resposta) => {
       console.log("FUNCIONOU: " + JSON.stringify(resposta.data));
      setUsuario(resposta.data);
      setCarregando("false")
      navigate("../hoje", { replace: true });
    });

    promise.catch((error) => {
      setCarregando("false")
      alert(error.response.data.message)
    });
  };

  let entrarBotao = <Botao type="submit">Entrar</Botao>;

  if (carregando === "true") {
    entrarBotao  = (
      <Botao type="submit" disabled>
        <Spinner>
          <ThreeDots
            height="40"
            width="80"
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
    <>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <form onSubmit={handleSubmit}>
        <Container>
          <Email data-identifier="input-email"
            disabled={carregando === "false" ? false : true}
            type="text"
            name="email"
            id="email"
            value={loginInfo.email}
            onChange={handleInputChange}
            placeholder="email"
          ></Email>
          <Senha data-identifier="input-password"
            disabled={carregando === "false" ? false : true}
            type="text"
            name="password"
            id="password"
            value={loginInfo.password}
            onChange={handleInputChange}
            placeholder="senha"
          ></Senha>
          {entrarBotao} 
          <StyleLink>
            <Link to= "/cadastro" data-identifier="sign-up-action">N??o tem uma conta? Cadastre-se</Link>
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

const Spinner = styled.div`
  height: 40px;
  width: 80px;
  margin: 0 auto;
`;
