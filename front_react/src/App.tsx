import React from "react";

import Header from "./components/Header/header";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Initial from "./components/Initial/initial";


function App() {
  return (
    <>
      <Header />
      <Initial/>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
