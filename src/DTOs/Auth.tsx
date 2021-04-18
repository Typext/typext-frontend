import { StringifyOptions } from 'node:querystring';
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
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
  office: string;
  phone: string;
  company: string;
  area: string;
}

export interface RecoveryCredentials {
  email: string;
}

export interface ResetCredentials {
  password: string;
  confirmPassword: string;
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

interface RecoveryPassowordData {
  error: string;
  loader: boolean;
}

interface ResetPasswordData {
  error: String;
  loader: boolean;
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
  recovery: RecoveryPassowordData;
  reset: ResetPasswordData;
  signIn(crendentials: SignInCredentials): Promise<boolean>;
  signUp(crendentials: SignUpCredentials): Promise<void>;
  signOut(): void;
  inviteUser(crendentials: InviteUserCredentials): Promise<void>;
  recoveryPassword(crendentials: RecoveryCredentials): Promise<void>;
  resetPassword(credentials: ResetCredentials): Promise<void>;
}
export interface AuthProviderProps {
  children: ReactNode;
}
