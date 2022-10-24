import Login from "./Login";

import Cadastro from "./Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioContext } from "./contexts/UsuarioContext";
import { useState } from "react";
import MeusHabitos from "./MeusHabitos";
import Hoje from "./Hoje";

function App() {
  const [usuario, setUsuario] = useState({});
  const [porcentagem, setPorcentagem] = useState(0);
 
  function calcularPorcentagem(habitos) {
    //fazer o calculo
    let percent = 0;
    if (habitos.length > 0) {
      const habitosFeitos = habitos.filter((habitoFeito) => habitoFeito.done); // []
      percent = (habitosFeitos.length / habitos.length) * 100;
      console.log("porcentagem: " + porcentagem);
    }
    setPorcentagem(percent);
  }

  return (
    <BrowserRouter>
      <UsuarioContext.Provider value={{ usuario, porcentagem, setUsuario, calcularPorcentagem}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
         <Route path="/habitos" element={<MeusHabitos/>} />
          <Route path="/hoje" element={<Hoje/>} />
        </Routes>
      </UsuarioContext.Provider>
    </BrowserRouter>
  );
}

export default App;

