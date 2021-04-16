import React, { useEffect, useState } from 'react';

import { useUsers } from 'contexts/user';
import DefaultModal from 'components/DefaultModal';

import UpdateSuccess from './UpdateSuccess';
import UserContent from './UserContent';
import DeleteUser from './DeleteUser';
import { Container } from './styles';

interface UserModalProps {
  selectedUser: { id: string; name: string; type: string };
  onClose: Function;
}

const UserModal = ({ selectedUser, onClose }: UserModalProps) => {
  const { updateUserTypeSuccess, clearUpdateStatus, getUsers } = useUsers();

  const [showSuccessElement, setShowSuccessElement] = useState<boolean>(false);
  const [showDeleteUser, setShowDeleteUser] = useState<boolean>(false);

  useEffect(() => {
    if (updateUserTypeSuccess) {
      setShowSuccessElement(true);

      setTimeout(() => {
        if (onClose) onClose();
        clearUpdateStatus();
        getUsers();
      }, 2000);
    }
  }, [updateUserTypeSuccess, clearUpdateStatus, onClose, getUsers]);

  return (
    <DefaultModal onClose={onClose}>
      <Container>
        {showDeleteUser ? (
          <DeleteUser setShowDeleteUser={setShowDeleteUser} />
        ) : showSuccessElement ? (
          <UpdateSuccess />
        ) : (
          <UserContent
            selectedUser={selectedUser}
            onClose={onClose}
            setShowDeleteUser={setShowDeleteUser}
          />
        )}
      </Container>
    </DefaultModal>
  );
};

export default UserModal;
