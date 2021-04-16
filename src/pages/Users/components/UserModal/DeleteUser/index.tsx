import React, { useCallback, useState } from 'react';

import { ReactComponent as WarnIcon } from 'assets/warn.svg';
import Button from 'components/Button/Button';

import { Container, RemoveWarnSuccess } from './styles';

interface DeleteUserProps {
  setShowDeleteUser: Function;
}

const DeleteUser = ({ setShowDeleteUser }: DeleteUserProps) => {
  const [deleteUserSuccess, setDeleteUserSuccess] = useState<boolean>(false);

  const handleGoBack = useCallback(() => {
    if (setShowDeleteUser) setShowDeleteUser(false);
  }, [setShowDeleteUser]);

  const handleDeleteUser = useCallback(() => {
    setDeleteUserSuccess(true);
  }, []);

  return (
    <Container>
      {deleteUserSuccess ? (
        <RemoveWarnSuccess>
          <div className="warn">
            <WarnIcon />
            <h1>USUÁRIO REMOVIDO</h1>
          </div>
          <Button color="var(--gray)" onClick={handleGoBack}>
            Voltar
          </Button>
        </RemoveWarnSuccess>
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
