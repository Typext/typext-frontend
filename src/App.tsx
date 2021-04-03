import React from 'react';

import { AuthProvider, MainProvider } from 'contexts';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AuthProvider>
        <MainProvider>
          <Routes />
        </MainProvider>
      </AuthProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
