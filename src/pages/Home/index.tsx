import React from 'react';

import { Calendar, Badge } from 'antd';

import { useHistory } from 'react-router-dom';

import Button from 'components/Button/Button';
import { Container } from './styles';

const Home = () => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/minute');
  };

  return (
    <Container>
      <div className="Home">
        <div className="Calendar">
          <h1>Agenda</h1>
          <Calendar />
        </div>

        <div className="Buttons">
          <Button
            color="var(--red-pink)"
            colorText="white"
            size="33.75rem"
          >
            Criar ATA
          </Button>

          <Button
            color="var(--gray)"
            colorText="var(--black)"
            size="33.75rem"
          >
            Convidar
          </Button>

          <Button
            color="var(--gray)"
            colorText="var(--black)"
            size="33.75rem"
          >
            Buscar ATAS
          </Button>

          <Button
            color="var(--gray)"
            colorText="var(--black)"
            size="33.75rem"
          >
            Lista de Usuários
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
