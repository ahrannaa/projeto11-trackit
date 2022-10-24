import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer(props) {
  return (
    <>
      <Rodape>
        <StyleLink StyleLink to="/habitos" data-identifier="habit-page-action">
          Hábitos
        </StyleLink>

        <Circulo>
          <StyledLink to="/hoje">
            <CircularProgressbar
              value={props.porcentagem}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#FFFFFf",
                textColor: "#126ba5",
                pathColor: "#126ba5",
                trailColor: "red",
                textSize: "17px",
              })}
            />
          </StyledLink>
        </Circulo>

        <StyleLink to="/historico" data-identifier="historic-page-action">Histórico</StyleLink>
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
  .CircularProgressbar-text {
    transform: translate(-15px, 5px);
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-family: "Lexend Deca";
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: red;
`;
