import React from 'react';

import { AuthProvider } from './AuthContext';
import { MainProvider } from './MainContext';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <AuthProvider>
    <MainProvider>{children}</MainProvider>
  </AuthProvider>
);

export default ContextProvider;
