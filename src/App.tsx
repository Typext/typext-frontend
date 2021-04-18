import React from 'react';

import ContextProvider from 'contexts';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <ContextProvider>
        <Routes />
      </ContextProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
