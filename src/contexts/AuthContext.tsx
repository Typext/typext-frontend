/* eslint-disable no-unused-vars */
import React, { useCallback, createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface InviteUserCredentials {
  email: string;
  name: string;
  type: string;
}

interface AuthContextData {
  user: object;
  invitation: { error: string; loader: boolean; success: boolean };
  signIn(crendentials: SignInCredentials): Promise<void>;
  inviteUser(crendentials: InviteUserCredentials): Promise<void>;
  signOut(): void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [invitationError, setInvitationError] = useState<string>('');
  const [invitationSuccess, setInvitationSuccess] = useState<boolean>(false);
  const [invitationLoader, setInvitationLoader] = useState<boolean>(false);

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

  const signOut = useCallback(() => {
    localStorage.removeItem('@Typext:token');
    localStorage.removeItem('@Typext:user');

    setData({} as AuthState);

    history.push('/');
  }, [history]);

  const inviteUser = useCallback(async ({ name, email, type }) => {
    setInvitationLoader(true);

    try {
      const response = await api.post('/invite-users', { name, email, type });

      setInvitationSuccess(!!response.data);
    } catch (err) {
      const errorStatus = err.response.status;

      if (errorStatus === 401) {
        setInvitationError(err.response.data.message);
        setInvitationSuccess(false);
      }
    }

    setInvitationLoader(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        invitation: {
          error: invitationError,
          success: invitationSuccess,
          loader: invitationLoader,
        },
        signIn,
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
