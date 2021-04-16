import React from 'react';

import { AuthProvider } from './auth';
import { MainProvider } from './main';
import { UsersProvider } from './users';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <AuthProvider>
    <UsersProvider>
      <MainProvider>{children}</MainProvider>
    </UsersProvider>
  </AuthProvider>
);

export default ContextProvider;
