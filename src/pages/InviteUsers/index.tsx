import React, { useState, useCallback } from 'react';
import { message } from 'antd';

import { useAuth } from 'contexts';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Select from 'components/Select/Select';

import StyleInviteUsers from './styles';

import InviteConfirmationModal from './components/InviteConfirmationModal';

function InviteUsers() {
  const { inviteUser } = useAuth();

  const [openInvitationModal, setOpenInvitationModal] = useState<boolean>(
    false,
  );

  const [userPermission, setUserPermission] = useState<string>('Usuário');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const handleInviteUser = useCallback(
    e => {
      e.preventDefault();

      if (!userName || !userEmail) {
        message.error('Todos os campos devem estar preenchidos');
        return;
      }

      setOpenInvitationModal(true);
      inviteUser({
        name: userName,
        email: userEmail,
        type: userPermission,
      });
    },
    [inviteUser, userName, userEmail, userPermission],
  );

  return (
    <>
      {openInvitationModal && (
        <InviteConfirmationModal onClose={setOpenInvitationModal} />
      )}

      <StyleInviteUsers>
        <h1>Convidar Participante</h1>

        <form className="emailAndPermission" onSubmit={handleInviteUser}>
          <Input
            title="Nome"
            color="black"
            Size="large"
            styleWidth="41.875rem"
            onChange={event => setUserName(event.target.value)}
          />

          <Input
            title="E-mail"
            color="black"
            Size="large"
            styleWidth="41.875rem"
            onChange={event => setUserEmail(event.target.value)}
          />

          <Select
            title="Nível de permissão"
            color="black"
            styleWidth="41.875rem"
            onChange={event => setUserPermission(event.target.value)}
          >
            <option value="Usuário">Usuario</option>
            <option value="Gerente">Gerente</option>
            <option value="Admin">Administrador</option>
          </Select>

          <Button
            color="var(--black)"
            colorText="white"
            size="23.75rem"
            type="submit"
          >
            Convidar
          </Button>
        </form>
      </StyleInviteUsers>
    </>
  );
}

export default InviteUsers;
