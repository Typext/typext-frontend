import React from 'react';

import { AuthProvider } from './auth';
import { MinuteProvider } from './minute';
import { UsersProvider } from './user';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <AuthProvider>
    <UsersProvider>
      <MinuteProvider>{children}</MinuteProvider>
    </UsersProvider>
  </AuthProvider>
);

export default ContextProvider;
