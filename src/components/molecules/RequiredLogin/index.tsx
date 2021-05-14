import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo_complete.svg';
import Button from 'components/atoms/Button';

import Warning from 'assets/warning.svg';

import { Container } from './styles';

function RequiredLogin() {
  const history = useHistory();

  const handleNavigateToLogin = useCallback(() => {
    history.push('/login');
  }, [history]);

  return (
    <Container>
      <Logo />

      <section>
        <h1>Login Obrigatório</h1>
        <img src={Warning} alt="Aviso" />
        <h2>Faça login para acessar essa tela</h2>
      </section>

      <Button color="#F60846" onClick={handleNavigateToLogin}>
        Fazer login
      </Button>
    </Container>
  );
}

export default RequiredLogin;
