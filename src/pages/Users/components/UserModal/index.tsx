import React, { useCallback, useState } from 'react';

import { ReactComponent as UserIcon } from 'assets/userIcon.svg';
import DefaultModal from 'components/DefaultModal';

import Button from 'components/Button/Button';
import { Container } from './styles';

interface UserModalProps {
  selectedUser: { id: string; name: string; type: string };
  onClose: Function;
}

const UserModal = ({ selectedUser, onClose }: UserModalProps) => {
  const userIsAdmin = selectedUser.type === 'Admin';
  const [userType, setUserType] = useState(selectedUser.type);

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const handleSelectUserType = (e: any) => {
    setUserType(e.target.value);
  };

  const handleUpdateUserType = () => {
    // eslint-disable-next-line no-console
    console.log(userType);
  };

  return (
    <DefaultModal onClose={onClose}>
      <Container userIsAdmin={userIsAdmin}>
        <section className="userInfo">
          <UserIcon />

          <h1>{selectedUser.name}</h1>
          {userIsAdmin ? (
            <h2>{selectedUser.type}</h2>
          ) : (
            <form className="usertype">
              <input
                type="radio"
                id="normal"
                name="type"
                value="Usuário"
                onChange={handleSelectUserType}
              />
              <label htmlFor="normal">Comum</label>

              <input
                type="radio"
                id="gerente"
                name="type"
                value="Gerente"
                onChange={handleSelectUserType}
              />
              <label htmlFor="gerente">Gerente</label>

              <input
                type="radio"
                id="admin"
                name="type"
                value="Admin"
                onChange={handleSelectUserType}
              />
              <label htmlFor="admin">Admin</label>
            </form>
          )}
        </section>

        <section className="buttons">
          <Button color="var(--gray)" onClick={handleClose}>
            Voltar
          </Button>

          {!userIsAdmin && (
            <>
              <Button color="var(--red-pink)">Excluir</Button>
              <Button color="var(--green)" onClick={handleUpdateUserType}>
                Atualizar
              </Button>
            </>
          )}
        </section>
      </Container>
    </DefaultModal>
  );
};

export default UserModal;
