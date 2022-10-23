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
      {props.name}
      <button onClick={props.onDelete}>limpar</button>
      <Teste>
        {Object.keys(dias).map((day) =>
          props.days.includes(Number(day)) ? (
            <DiaSelecionado>{dias[day]}</DiaSelecionado>
          ) : (
            <Dia>{dias[day]}</Dia>
          )
        )}
      </Teste>
    </HabitoCadastrado>
  );
}
const HabitoCadastrado = styled.div`
  width: 340px;
  height: 91px;
  left: 17px;
  top: 147px;
  background: blue;
  border-radius: 5px;
`;
const Teste = styled.div`
  display: flex;
`;
const Dia = styled.button`
  width: 30px;
  height: 30px;
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
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
`;
