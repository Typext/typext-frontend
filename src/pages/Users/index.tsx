import React, { useCallback, useState, useEffect } from 'react';

import { useUsers } from 'contexts/user';

import UserModal from './components/UserModal';
import UserInfo from './components/UserInfo';
import { Container } from './styles';

const Users = () => {
  const { getUsers, users } = useUsers();

  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    type: '',
  });

  const [showUserModal, setShowUserModal] = useState(false);

  const handleToggleShowModal = useCallback(() => {
    setShowUserModal(!showUserModal);
  }, [showUserModal]);

  const handleOpenUserModal = useCallback(
    user => {
      handleToggleShowModal();
      setSelectedUser(user);
    },
    [handleToggleShowModal],
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {showUserModal && (
        <UserModal
          selectedUser={selectedUser}
          onClose={handleToggleShowModal}
        />
      )}

      <Container>
        <h1>Lista de Usuários</h1>

        <section className="info">
          <div>Nome do usuário</div>
          <div>Nível de permissão</div>
        </section>

        <section className="usersList">
          {users?.map(user => (
            <UserInfo
              key={user.id}
              user={user}
              onClick={() => handleOpenUserModal(user)}
            />
          ))}
        </section>
      </Container>
    </>
  );
};

export default Users;
