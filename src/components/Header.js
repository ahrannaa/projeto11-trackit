import styled from "styled-components";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function Header() {
  const { usuario } = useContext(UsuarioContext)

  return(
    <Cabeçalho>
      <h1>TrackIt</h1>
      <img src= { usuario.image }alt="foto-perfil" data-identifier="avatar"/>
  </Cabeçalho>
  )
}
const Cabeçalho = styled.div`
 
  width: 100%;
   height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
  position:fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;


  h1{
    font-family: 'Playball';
   font-style: normal;
    font-weight: 400;
   font-size: 38.982px;
    line-height: 49px;
    margin-left: 18px;
    color: #FFFFFF;
  }


   img{
    margin-right: 50px;
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
   }
  `
