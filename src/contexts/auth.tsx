/* eslint-disable no-unused-vars */
import React, { useCallback, createContext, useState, useContext } from 'react';
import api from 'services/api';

import { AuthContextData, AuthProviderProps, AuthState } from 'DTOs/Auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signUpError, setSignUpError] = useState<string>('');
  const [signUpLoader, setSignUpLoader] = useState<boolean>(false);
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);

  const [inviteError, setInviteError] = useState<string>('');
  const [inviteLoader, setInviteLoader] = useState<boolean>(false);

  const [recoveryError, setRecoveryError] = useState<string>('');
  const [recoveryLoader, setRecoveryLoader] = useState<boolean>(false);

  const [resetError, setResetError] = useState<string>('');
  const [resetLoader, setResetLoader] = useState<boolean>(false);
  const [resetSuccess, setResetSuccess] = useState<boolean>(false);

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
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@Typext:token', token);
      localStorage.setItem('@Typext:user', JSON.stringify(user));

      setData({ token, user });
      return true;
    } catch (err) {
      const errorStatus = err.response?.status;

      if (errorStatus === 401) {
        setInviteError(err.response?.data.message);
      }

      return false;
    }
  }, []);

  const signUp = useCallback(async credentials => {
    setSignUpError('');
    setSignUpSuccess(false);
    setSignUpLoader(true);

    try {
      await api.post('/users', credentials);

      setSignUpLoader(false);
      setSignUpSuccess(true);
    } catch (err) {
      const errorData = err.response?.data;
      const validationError = errorData?.validation?.body?.message;

      setSignUpError(validationError || err.response.validation?.body?.message);
      setSignUpLoader(false);
      setSignUpSuccess(false);
    }
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);

    localStorage.removeItem('@Typext:token');
    localStorage.removeItem('@Typext:user');
  }, []);

  const inviteUser = useCallback(async ({ name, email, type }) => {
    setInviteLoader(true);

    try {
      setInviteError('');
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
    } catch (err) {
      const errorStatus = err.response?.status;

      if (errorStatus === 401) {
        setInviteError(err.response?.data.message);
      }
    }

    setInviteLoader(false);
  }, []);

  const recoveryPassword = useCallback(async ({ email }) => {
    setRecoveryLoader(true);

    try {
      setRecoveryError('');

      await api.post('/password/forgot', {
        email,
      });
    } catch (err) {
      setRecoveryError(err.response?.data.message);
    }

    setRecoveryLoader(false);
  }, []);

  const resetPassword = useCallback(
    async ({ email, password, password_confirmation }) => {
      setResetLoader(true);

      try {
        setResetError('');

        await api.post('/password/reset', {
          email,
          password,
          password_confirmation,
        });

        setResetLoader(false);
        setResetSuccess(true);
      } catch (err) {
        setResetLoader(false);
        setResetError(err.response?.data.validation.body.message);
      }
    },
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        invitation: {
          error: inviteError,
          loader: inviteLoader,
        },
        register: {
          error: signUpError,
          loader: signUpLoader,
          success: signUpSuccess,
        },
        recovery: {
          error: recoveryError,
          loader: recoveryLoader,
        },
        reset: {
          error: resetError,
          loader: resetLoader,
          success: resetSuccess,
        },
        signIn,
        signUp,
        signOut,
        inviteUser,
        recoveryPassword,
        resetPassword,
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
