import { Link } from "react-router-dom";
import styled from "styled-components";



export default function Footer() {
  return (
    <>
   
    <Rodapé>
      <h1>Hábitos</h1>
      <Circulo>
      <Link to="/hoje">Hoje</Link>
      </Circulo>
     <h1>Histórico</h1>
    </Rodapé>
   
   
    
    </>
  );
}

const Rodapé = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0px;
  margin-top: 400px;
  bottom: 0;
  left: 0;
  background: red;
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
  left: 142px;
  top: 566px;
  border-radius: 50px;
  background: #52b6ff;

 p{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-family: 'Lexend Deca';
  font-size: 18px;
  color: #ffffff;
}`