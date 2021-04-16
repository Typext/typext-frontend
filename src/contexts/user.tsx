/* eslint-disable no-unused-vars */
import React, { useCallback, createContext, useState, useContext } from 'react';
import api from 'services/api';

import { UserContextData, UserProviderProps } from 'DTOs/User';

const UsersContext = createContext<UserContextData>({} as UserContextData);

interface UserData {
  id: string;
  name: string;
  type: string;
}

const UsersProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<UserData[]>([
    { id: '', name: '', type: '' },
  ]);
  const [updateUserTypeSuccess, setUpdateUserTypeSuccess] = useState<boolean>(
    false,
  );

  const getUsers = useCallback(async () => {
    const response = await api.get('/users');

    setUsers(response.data);
  }, []);

  const updateUserType = useCallback(async ({ id, userType }) => {
    try {
      await api.patch(`/users/${id}`, { type: userType });
      setUpdateUserTypeSuccess(true);
    } catch (error) {
      setUpdateUserTypeSuccess(true);
    }
  }, []);

  const clearUpdateStatus = useCallback(() => {
    setUpdateUserTypeSuccess(false);
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        updateUserTypeSuccess,
        getUsers,
        updateUserType,
        clearUpdateStatus,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

function useUsers(): UserContextData {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error('useUsers must be used within an UsersProvider');
  }

  return context;
}

export { UsersProvider, useUsers };
