import React, { useCallback, useEffect, useState } from 'react';

import { useUsers } from 'contexts/user';
import DefaultModal from 'components/organisms/DefaultModal';

import UpdateSuccess from './UpdateSuccess';
import UserContent from './UserContent';
import DeleteUser from './DeleteUser';
import { Container } from './styles';

interface UserModalProps {
  selectedUser: { id: string; name: string; type: string };
  onClose: Function;
}

const UserModal = ({ selectedUser, onClose }: UserModalProps) => {
  const { updateUserTypeSuccess, clearAllSuccessStatus, getUsers } = useUsers();

  const [showDeleteUser, setShowDeleteUser] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    if (onClose) onClose();
    clearAllSuccessStatus();
    getUsers();
  }, [getUsers, clearAllSuccessStatus, onClose]);

  useEffect(() => {
    if (updateUserTypeSuccess) {
      setTimeout(() => {
        handleCloseModal();
      }, 2000);
    }
  }, [updateUserTypeSuccess, handleCloseModal]);

  return (
    <DefaultModal onClose={handleCloseModal}>
      <Container>
        {showDeleteUser ? (
          <DeleteUser
            setShowDeleteUser={setShowDeleteUser}
            user={selectedUser}
          />
        ) : updateUserTypeSuccess ? (
          <UpdateSuccess />
        ) : (
          <UserContent
            selectedUser={selectedUser}
            onClose={handleCloseModal}
            setShowDeleteUser={setShowDeleteUser}
          />
        )}
      </Container>
    </DefaultModal>
  );
};

export default UserModal;
