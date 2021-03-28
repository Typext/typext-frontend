import React, { createContext } from 'react';

export const MainContext = createContext({});

interface IMainContext {
  children: React.ReactNode;
}

export const MainProvider: React.FC<IMainContext> = ({ children }: IMainContext) => {
  return (
    <MainContext.Provider value="teste">
      {children}
    </MainContext.Provider>
  );
};
