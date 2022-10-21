import styled from "styled-components";
export default function Footer() {
  return (
    <Rodapé>
      <h1>Hábitos</h1>
      <h1>Histórico</h1>
    </Rodapé>
  );
}

const Rodapé = styled.div`
  width: 100%;
  height: 70px;
  left: 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  background:#FFFFFF;;
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
