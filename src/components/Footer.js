import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer(props) {
  return (
    <>
      <Rodape>
        <Link to="/habitos">Hábitos</Link>
        <Link to="/hoje">hoje</Link>
        <Circulo>
        <CircularProgressbar
          value={props.porcentagem}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#FFFFFf",
            textColor: "#126ba5",
            pathColor: "#126ba5",
            trailColor: "green",
            textSize: "17px",
          })}
        />
        </Circulo>

        <h1>Histórico</h1>
      </Rodape>
    </>
  );
}

const Rodape = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0px;
  margin-top: 400px;
  bottom: 0;
  left: 0;
  background: #126ba5;
  display: flex;
  justify-content: space-around;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;

const Circulo = styled.div`
  width: 91px;
  height: 91px;
  

  p {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #ffffff;
  }
`;
