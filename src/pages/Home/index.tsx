import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Home = () => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/minute');
  };

  return (
    <Container>
      Home asd123 12312
      <button type="button" onClick={handleNavigate}>
        Teste
      </button>
    </Container>
  );
};

export default Home;
