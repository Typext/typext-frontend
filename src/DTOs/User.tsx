import { ReactNode } from 'react';

export interface IUser {
  name: string;
  username: string;
  email: string;
}

interface UserData {
  id: string;
  name: string;
  type: string;
}

export interface UserContextData {
  users: Array<UserData>;
  getUsers(): void;
}

export interface UserProviderProps {
  children: ReactNode;
}
