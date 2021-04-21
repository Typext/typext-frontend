/* eslint-disable no-unused-vars */
import React, { useCallback, createContext, useState, useContext } from 'react';
import api from 'services/api';

import { UserContextData, UserProviderProps, IUser } from 'DTOs/User';

const UsersContext = createContext<UserContextData>({} as UserContextData);

const UsersProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<IUser[]>([{} as IUser]);

  const [deleteUserLoader, setDeleteUserLoader] = useState<boolean>(false);
  const [deleteUserError, setDeleteUserError] = useState<string>('');

  const [updateUserInfoError, setUpdateUserInfoError] = useState<string>('');
  const [updateUserInfoLoader, setUpdateUserInfoLoader] = useState<boolean>(
    false,
  );
  const [updateUserTypeSuccess, setUpdateUserTypeSuccess] = useState<boolean>(
    false,
  );

  const getUsers = useCallback(async () => {
    const response = await api.get('/users');

    setUsers(response.data);
  }, []);

  const updateUserInfo = useCallback(async data => {
    setUpdateUserInfoLoader(true);
    try {
      await api.put('/users/logged', data);
    } catch (err) {
      const errorData = err.response?.data;
      const celebrateError = errorData?.validation?.body?.message;

      setUpdateUserInfoError(celebrateError || errorData?.message);
    }
    setUpdateUserInfoLoader(false);
  }, []);

  const updateUserType = useCallback(async ({ id, userType }) => {
    try {
      await api.patch(`/users/${id}`, { type: userType });
      setUpdateUserTypeSuccess(true);
    } catch (error) {
      setUpdateUserTypeSuccess(false);
    }
  }, []);

  const deleteUser = useCallback(async id => {
    setDeleteUserLoader(true);
    try {
      await api.delete(`/users/${id}`);
    } catch (err) {
      const errorData = err.response?.data;
      const celebrateError = errorData?.validation?.body?.message;

      setDeleteUserError(celebrateError || errorData?.message);
    }
    setDeleteUserLoader(false);
  }, []);

  const clearAllSuccessStatus = useCallback(() => {
    setUpdateUserTypeSuccess(false);
    setDeleteUserError('');
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        updateUserTypeSuccess,
        deleteUserLoader,
        deleteUserError,
        updateUserInfoError,
        updateUserInfoLoader,
        getUsers,
        deleteUser,
        updateUserType,
        updateUserInfo,
        clearAllSuccessStatus,
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
