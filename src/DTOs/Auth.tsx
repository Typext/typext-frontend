import { ReactNode } from 'react';

export interface AuthState {
  token: string;
  user: {
    id: string;
    type: string;
    name: string;
    email: string;
    office: string;
    area: string;
    company: string;
    phone: string;
    password: string;
  };
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

interface InvitationData {
  error: string;
  loader: boolean;
}
interface RegisterData {
  error: string;
  loader: boolean;
  success: boolean;
}

export interface AuthContextData {
  user: {
    id: string;
    type: string;
    name: string;
    email: string;
    office: string;
    area: string;
    company: string;
    phone: string;
    password: string;
  };
  invitation: InvitationData;
  register: RegisterData;
  signIn(crendentials: SignInCredentials): Promise<boolean>;
  signUp(crendentials: SignUpCredentials): Promise<void>;
  inviteUser(crendentials: InviteUserCredentials): Promise<void>;
  signOut(): void;
}
export interface AuthProviderProps {
  children: ReactNode;
}
