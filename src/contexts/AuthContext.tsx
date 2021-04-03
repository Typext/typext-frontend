import React, { createContext, useState } from 'react';

import { IUser } from 'DTOs';

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContextData {
  user: any;
  setUser: Function;
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({
  children,
}: IAuthProvider) => {
  const [user, setUser] = useState<IUser>({
    name: '',
    username: '',
    email: '',
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
