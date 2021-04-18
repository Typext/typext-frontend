import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button/Button';

import astronaut from 'assets/astronaut.png';

import { Container } from './styles';

const NotFound = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>

      <h1>404</h1>
      <h2>Oopss !</h2>
      <p>Page not found</p>

      <img src={astronaut} alt="astronaut" />

      <Button onClick={handleGoBack}>Voltar</Button>
    </Container>
  );
};

export default NotFound;
