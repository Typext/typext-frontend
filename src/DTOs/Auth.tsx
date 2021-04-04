import { ReactNode } from 'react';

export interface AuthState {
  token: string;
  user: object;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface InviteUserCredentials {
  email: string;
  name: string;
  type: string;
}

export interface SignUpCredentials {
  token: string;
  name: string;
  password: string;
  password_confirmation: string;
  office: string;
  phone: string;
  company: string;
  area: string;
}

export interface AuthContextData {
  user: object;
  invitation: { error: string; loader: boolean; success: boolean };
  register: { error: string; loader: boolean; success: boolean };
  signIn(crendentials: SignInCredentials): Promise<void>;
  signUp(crendentials: SignUpCredentials): Promise<void>;
  inviteUser(crendentials: InviteUserCredentials): Promise<void>;
  signOut(): void;
}
export interface AuthProviderProps {
  children: ReactNode;
}
