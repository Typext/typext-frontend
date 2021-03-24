import React from "react";

import Header from "./components/Header/Header";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Initial from "./components/Initial/Initial";


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
