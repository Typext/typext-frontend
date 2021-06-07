import React from 'react';

import { AuthProvider } from './auth';
import { MinuteProvider } from './minute';
import { ReviewProvider } from './review';
import { UsersProvider } from './user';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <AuthProvider>
    <UsersProvider>
      <ReviewProvider>
        <MinuteProvider>{children}</MinuteProvider>
      </ReviewProvider>
    </UsersProvider>
  </AuthProvider>
);

export default ContextProvider;
