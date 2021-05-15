/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';

import { Calendar } from 'antd';

import { useHistory } from 'react-router-dom';

import { getUser } from 'services/auth';

import Button from 'components/atoms/Button';

import { Container } from './styles';

import CalendarIcon from '../../assets/calendar-gray.svg';

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
          <h1>
            Agenda <img src={CalendarIcon} alt="" />
          </h1>
          <Calendar />
        </div>

        <div className="Buttons">
          <Button
            type="button"
            styleComponent="red"
            sizeComponent="large"
            onClick={handleNavigateToMinute}
          >
            Criar ATA
          </Button>

          <Button
            type="button"
            styleComponent="gray"
            sizeComponent="large"
            onClick={handleNavigateToSearchMinutes}
          >
            Buscar ATAS
          </Button>

          {!userIsNotAdmin && (
            <>
              <Button
                type="button"
                styleComponent="gray"
                sizeComponent="large"
                onClick={handleNavigateToInvite}
              >
                Convidar
              </Button>

              <Button
                type="button"
                styleComponent="gray"
                sizeComponent="large"
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
