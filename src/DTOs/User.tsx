import { ReactNode } from 'react';

export interface IUser {
  id: string;
  type: string;
  name: string;
  email: string;
  office: string;
  area: string;
  company: string;
  phone: string;
  password: string;
}

export interface UserContextData {
  users: Array<IUser>;
  updateUserTypeSuccess: boolean;
  deleteUserLoader: boolean;
  deleteUserError: string;
  updateUserInfoLoader: boolean;
  updateUserInfoError: string;
  getUsers(): void;
  clearAllSuccessStatus(): void;
  deleteUser(id: string): void;
  updateUserType(credentials: { id: string; userType: string }): void;
  updateUserInfo(credentials: IUser): void;
}

export interface UserProviderProps {
  children: ReactNode;
}
