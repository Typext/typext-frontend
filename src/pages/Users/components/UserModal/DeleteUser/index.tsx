import React, { useCallback, useState } from 'react';

import { ReactComponent as WarnIcon } from 'assets/warn.svg';
import Button from 'components/atoms/Button';

import { useUsers } from 'contexts/user';
import { Container, RemoveWarnSuccess } from './styles';

interface DeleteUserProps {
  setShowDeleteUser: Function;
  user: { id: string };
}

const DeleteUser = ({ setShowDeleteUser, user }: DeleteUserProps) => {
  const { deleteUser, deleteUserLoader, deleteUserError } = useUsers();

  const [showDeleteStatus, setShowDeleteStatus] = useState<boolean>(false);

  const handleGoBack = useCallback(() => {
    if (setShowDeleteUser) setShowDeleteUser(false);
  }, [setShowDeleteUser]);

  const handleDeleteUser = useCallback(async () => {
    setShowDeleteStatus(true);
    await deleteUser(user?.id);
  }, [user, deleteUser]);

  return (
    <Container>
      {showDeleteStatus ? (
        <>
          {deleteUserLoader ? (
            <h1>Carregando</h1>
          ) : (
            <RemoveWarnSuccess>
              <div className="warn">
                <WarnIcon />
                <h1>{deleteUserError || 'USUÁRIO REMOVIDO'}</h1>
              </div>
            </RemoveWarnSuccess>
          )}
        </>
      ) : (
        <>
          <section className="warn">
            <WarnIcon />
            <h1>TEM CERTEZA?</h1>
            <p>ESTA AÇÃO NÃO PODERÁ SER DEFEITA.</p>
          </section>
          <section className="buttons">
            <Button color="var(--gray)" onClick={handleGoBack}>
              Voltar
            </Button>
            <Button color="var(--red-pink)" onClick={handleDeleteUser}>
              Excluir
            </Button>
          </section>
        </>
      )}
    </Container>
  );
};

export default DeleteUser;
