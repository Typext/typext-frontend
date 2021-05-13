import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button/Button';

import logoSVG from 'assets/logo.svg';
import notFoundSVG from 'assets/404-not-found.svg';

import { Container } from './styles';

const NotFound = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <img className="logo" src={logoSVG} alt="typext" />

      <h1>Ops...</h1>
      <img src={notFoundSVG} alt="astronaut" />
      <p>Página não encontrada</p>

      <Button onClick={handleGoBack}>Voltar</Button>
    </Container>
  );
};

export default NotFound;
