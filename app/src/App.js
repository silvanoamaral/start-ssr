import React from "react";
import logo from "./logo.svg";
import "./App.css";

function ComponenteTeste({ texto }) {
  return (
    <p>
      Carregando o Aplicativo no <strong>{texto}</strong>
    </p>
  );
}

function App() {
  return <ComponenteTeste texto="server" />;
}

export default App;
