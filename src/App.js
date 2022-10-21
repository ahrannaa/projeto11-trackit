import Login from "./Login";
import Cadastro from "./Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioContext } from "./contexts/UsuarioContext";
import { useState } from "react";
import Habitos from "./Habitos";

function App() {
  const [usuario, setUsuario] = useState({});
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");

  const handleSubmit = ({ email, senha, name, foto }) => {
    console.log("dados app", { email, senha, name });

    setEmail(email);
    setSenha(senha);
    setName(name);
    setFoto(foto);
  };

  return (
    <BrowserRouter>
      <UsuarioContext.Provider value={{ usuario, setUsuario }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
        </Routes>
      </UsuarioContext.Provider>
    </BrowserRouter>
  );
}

export default App;
