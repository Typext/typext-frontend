import React from 'react';

import { useAuth } from 'contexts';

import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as EmailError } from 'assets/email_error.svg';

import DefaultModal from 'components/DefaultModal';
import Loader from 'components/Loader';

import { Container, Content } from './styles';

interface InviteConfirmationProps {
  onClose: Function;
}

const InviteConfirmationModal = ({ onClose }: InviteConfirmationProps) => {
  const { invitation } = useAuth();

  return (
    <Container>
      <DefaultModal onClose={onClose}>
        {invitation.loader ? (
          <Loader />
        ) : invitation.success ? (
          <Content>
            <Email />
            <h1>E-MAIL ENVIADO!</h1>
            <h3>SOLICITE A VERIFICAÇÃO</h3>
          </Content>
        ) : (
          <Content>
            <EmailError />
            <h1>ERRO AO ENVIAR CONVITE</h1>
            <h3>{invitation.error?.toUpperCase()}</h3>
          </Content>
        )}
      </DefaultModal>
    </Container>
  );
};

export default InviteConfirmationModal;
