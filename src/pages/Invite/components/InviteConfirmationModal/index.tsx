import React from 'react';

import { useAuth } from 'contexts/auth';

import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as EmailError } from 'assets/email_error.svg';
import DefaultModal from 'components/organisms/DefaultModal';
import Loader from 'components/molecules/Loader';

import { Container, Content } from './styles';

interface InviteConfirmationProps {
  onClose: Function;
}

const InviteConfirmationModal = ({ onClose }: InviteConfirmationProps) => {
  const {
    invitation: { error, loader },
  } = useAuth();

  return (
    <Container>
      <DefaultModal onClose={onClose}>
        {loader ? (
          <Loader />
        ) : error === '' ? (
          <Content>
            <Email />
            <h1>E-MAIL ENVIADO!</h1>
            <h3>SOLICITE A VERIFICAÇÃO</h3>
          </Content>
        ) : (
          <Content error>
            <EmailError />
            <h1>ERRO AO ENVIAR CONVITE</h1>
            <h3>{error?.toUpperCase()}</h3>
          </Content>
        )}
      </DefaultModal>
    </Container>
  );
};

export default InviteConfirmationModal;
