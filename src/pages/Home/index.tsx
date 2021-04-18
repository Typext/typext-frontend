import React, { useCallback } from 'react';

import { Calendar } from 'antd';

import { useHistory } from 'react-router-dom';

import { getUser } from 'services/auth';

import Button from 'components/Button/Button';
import { Container } from './styles';

const Home = () => {
  const user = getUser();

  const history = useHistory();

  const userIsNotAdmin = user?.type === 'Usuário';

  const handleNavigateToMinute = useCallback(() => {
    history.push('/minute');
  }, [history]);

  const handleNavigateToInvite = useCallback(() => {
    history.push('/invite');
  }, [history]);

  const handleNavigateToSearchMinutes = useCallback(() => {
    history.push('/search');
  }, [history]);

  const handleNavigateToListUsers = useCallback(() => {
    history.push('/users');
  }, [history]);

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
            onClick={handleNavigateToMinute}
          >
            Criar ATA
          </Button>

          <Button
            color="var(--gray)"
            colorText="var(--black)"
            size="33.75rem"
            onClick={handleNavigateToSearchMinutes}
          >
            Buscar ATAS
          </Button>

          {!userIsNotAdmin && (
            <>
              <Button
                color="var(--gray)"
                colorText="var(--black)"
                size="33.75rem"
                onClick={handleNavigateToInvite}
              >
                Convidar
              </Button>

              <Button
                color="var(--gray)"
                colorText="var(--black)"
                size="33.75rem"
                onClick={handleNavigateToListUsers}
              >
                Lista de Usuários
              </Button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
