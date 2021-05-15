import React, { useCallback, useState } from 'react';

import { useUsers } from 'contexts/user';
import { ReactComponent as UserIcon } from 'assets/userIcon.svg';
import Button from 'components/atoms/Button';

import { Container } from './styles';

interface UserModalProps {
  selectedUser: { id: string; name: string; type: string };
  onClose: Function;
  setShowDeleteUser: Function;
}

const UserModal = ({
  selectedUser,
  onClose,
  setShowDeleteUser,
}: UserModalProps) => {
  const { updateUserType } = useUsers();

  const userIsAdmin = selectedUser?.type === 'Admin';
  const [userType, setUserType] = useState(selectedUser?.type);

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const handleSelectUserType = useCallback((e: any) => {
    setUserType(e.target.value);
  }, []);

  const handleUpdateUserType = useCallback(async () => {
    await updateUserType({ id: selectedUser.id, userType });
  }, [updateUserType, selectedUser, userType]);

  const handleDeleteUser = useCallback(() => {
    if (setShowDeleteUser) setShowDeleteUser(true);
  }, [setShowDeleteUser]);

  return (
    <Container userIsAdmin={userIsAdmin}>
      <section className="userInfo">
        <UserIcon />

        <h1>{selectedUser?.name}</h1>
        {userIsAdmin ? (
          <h2>{selectedUser?.type}</h2>
        ) : (
          <form className="usertype">
            <input
              type="radio"
              id="normal"
              name="type"
              value="Usuário"
              onChange={handleSelectUserType}
              defaultChecked={userType === 'Usuário'}
            />
            <label htmlFor="normal">Comum</label>

            <input
              type="radio"
              id="gerente"
              name="type"
              value="Gerente"
              onChange={handleSelectUserType}
              defaultChecked={userType === 'Gerente'}
            />
            <label htmlFor="gerente">Gerente</label>

            <input
              type="radio"
              id="admin"
              name="type"
              value="Admin"
              onChange={handleSelectUserType}
              defaultChecked={userType === 'Admin'}
            />
            <label htmlFor="admin">Admin</label>
          </form>
        )}
      </section>

      <section className="buttons">
        <Button
          styleComponent="gray"
          sizeComponent="normal"
          onClick={handleClose}
        >
          Voltar
        </Button>

        {!userIsAdmin && (
          <>
            <Button
              styleComponent="red"
              sizeComponent="normal"
              onClick={handleDeleteUser}
            >
              Excluir
            </Button>
            <Button
              styleComponent="green"
              sizeComponent="normal"
              onClick={handleUpdateUserType}
            >
              Atualizar
            </Button>
          </>
        )}
      </section>
    </Container>
  );
};

export default UserModal;
