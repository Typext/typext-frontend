import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'contexts';

import { ReactComponent as Like } from 'assets/like.svg';
import { ReactComponent as Dislike } from 'assets/dislike.svg';

import DefaultModal from 'components/DefaultModal';
import Loader from 'components/Loader';

import { Container, Content } from './styles';

interface RegisterModalProps {
  onClose: Function;
}

const RegisterModal = ({ onClose }: RegisterModalProps) => {
  const {
    register: { success, loader, error },
  } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        history.push('/home');
      }, 2000);
    }
  }, [success, history]);

  return (
    <Container>
      <DefaultModal onClose={onClose}>
        {loader ? (
          <Loader />
        ) : success ? (
          <Content>
            <Like />
            <h1>CADASTRADO!</h1>
            <h3>FAZENDO LOGIN AUTOMATICO...</h3>
          </Content>
        ) : (
          <Content error>
            <Dislike />
            <h1>ERRO AO ATUALIZAR</h1>
            <h3>{error?.toUpperCase()}</h3>
          </Content>
        )}
      </DefaultModal>
    </Container>
  );
};

export default RegisterModal;