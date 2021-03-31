import React, { createContext } from 'react';

interface IMainContext {
  children: React.ReactNode;
}

export const MainContext = createContext({});

export const MainProvider: React.FC<IMainContext> = ({ children }: IMainContext) => {
  return (
    <MainContext.Provider value="teste">
      {children}
    </MainContext.Provider>
  );
};
