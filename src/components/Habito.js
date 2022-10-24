import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Habito(props) {
  const dias = {
    0: "D",
    1: "S",
    2: "T",
    3: "Q",
    4: "Q",
    5: "S",
    6: "S",
  };

  return (
    <HabitoCadastrado>
      <Header>
        <h3>{props.name}</h3>
        <StyledLink onClick={props.onDelete}>
          <ion-icon name="trash-outline"></ion-icon>
        </StyledLink>
      </Header>
      <Container>
        {Object.keys(dias).map((day) =>
          props.days.includes(Number(day)) ? (
            <DiaSelecionado>{dias[day]}</DiaSelecionado>
          ) : (
            <Dia>{dias[day]}</Dia>
          )
        )}
      </Container>
    </HabitoCadastrado>
  );
}

const HabitoCadastrado = styled.div`
  width: 340px;
  left: 17px;
  top: 147px;
  background: #b7d5e5;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-top: 15px;
    margin-left: 20px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 17px;
  margin-top: 15px;
  margin-right: 20px;
  color: #666666;
`;
const Container = styled.div`
  display: flex;
  margin-left: 15px;
`;
const Dia = styled.button`
  width: 30px;
  height: 30px;
  margin-bottom: 12px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
`;

const DiaSelecionado = styled.button`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CFCFCF;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
`;
