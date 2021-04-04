/* eslint-disable no-unused-vars */
import React, { useCallback, createContext, useState, useContext } from 'react';
import api from 'services/api';

import { AuthContextData, AuthProviderProps, AuthState } from 'DTOs/Auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Typext:token');
    const user = localStorage.getItem('@Typext:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Typext:token', token);
    localStorage.setItem('@Typext:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signUp = useCallback(async credentials => {
    try {
      const response = await api.post('/users', credentials);

      setSuccess(true);
      localStorage.setItem('@Typext:user', JSON.stringify(response.data));
      localStorage.setItem('@Typext:token', credentials.token);
    } catch (err) {
      const errorStatus = err.response?.status;

      if (errorStatus === 401) {
        setError(err.response?.data.message);
        setSuccess(false);
      }
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Typext:token');
    localStorage.removeItem('@Typext:user');

    setData({} as AuthState);
  }, []);

  const inviteUser = useCallback(async ({ name, email, type }) => {
    setLoader(true);

    try {
      const response = await api.post('/invite-users', {
        name,
        email,
        type,
      });

      const inviteData = response.data;

      localStorage.setItem(
        '@Typext:invite_data',
        JSON.stringify({ name: inviteData.name, email: inviteData.email }),
      );

      setSuccess(true);
    } catch (err) {
      const errorStatus = err.response?.status;

      if (errorStatus === 401) {
        setError(err.response?.data.message);
        setSuccess(false);
      }
    }

    setLoader(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        invitation: {
          error,
          success,
          loader,
        },
        register: {
          error,
          success,
          loader,
        },
        signIn,
        signUp,
        signOut,
        inviteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
