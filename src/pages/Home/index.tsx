/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar } from 'antd';
import { useHistory } from 'react-router-dom';

import { getUser } from 'services/auth';

import Button from 'components/atoms/Button';
import { useMinute } from 'contexts/minute';
import { IMinutes } from 'DTOs';
import { Container } from './styles';

import CalendarIcon from '../../assets/calendar-gray.svg';

const Home = () => {
  const user = getUser();
  const history = useHistory();
  const { getMinutes, minutes } = useMinute();

  const [scheduledMinutes, setScheduledMinutes] = useState<(IMinutes | undefined)[]
  >();

  const userIsNotAdmin = user?.type === 'Usuário';

  const handleNavigateToMinute = useCallback(() => {
    history.push('/minute');
  }, [history]);

  const handleNavigateToInvite = useCallback(() => {
    history.push('/invite');
  }, [history]);

  const handleNavigateToSearchMinutes = useCallback(() => {
    history.push('/minutes');
  }, [history]);

  const handleAccessScheduledMinute = useCallback(
    (id: number | string) => {
      history.push(`/review/${id}`);
    },
    [history],
  );

  const handleNavigateToListUsers = useCallback(() => {
    history.push('/users');
  }, [history]);

  useEffect(() => {
    getMinutes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (minutes.length > 0) {
      const scheduled = minutes.filter(minute => minute?.status === 'agendado');

      setScheduledMinutes(scheduled);
    }
  }, [minutes]);

  function dateCellRender(value: any) {
    const listData = scheduledMinutes || [];

    return (
      <ul className="events">
        {listData.map(item => (
          <>
            {moment(item?.start_date).format('MM/DD/YYYY') ===
              moment(value.toString()).format('MM/DD/YYYY') && (
              // eslint-disable-next-line
              <li
                key={item?.id}
                onClick={() => handleAccessScheduledMinute(item?.id || 0)}
              >
                Ata: {item?.project || 'Sem nome'}
              </li>
            )}
          </>
        ))}
      </ul>
    );
  }

  return (
    <Container>
      <div className="Home">
        <div className="Calendar">
          <h1>
            Agenda <img src={CalendarIcon} alt="" />
          </h1>
          <Calendar dateCellRender={dateCellRender} />
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
