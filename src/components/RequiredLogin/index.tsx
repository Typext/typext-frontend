import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo_complete.svg';
import Button from 'components/Button/Button';

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
        <h1>LOGIN OBRIGATÓRIO</h1>
        <h2>FAÇA LOGIN PARA ACESSAR ESSA TELA</h2>
      </section>

      <Button color="#F60846" onClick={handleNavigateToLogin}>
        Fazer login
      </Button>
    </Container>
  );
}

export default RequiredLogin;
