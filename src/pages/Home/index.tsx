/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';

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

  const handleNavigateToListUsers = useCallback(() => {
    history.push('/users');
  }, [history]);

  useEffect(() => {
    getMinutes();
  }, []);

  useEffect(() => {
    if (minutes.length > 0) {
      const scheduled = minutes.filter(minute => minute?.status === 'agendado');

      setScheduledMinutes(scheduled);
    }
  }, [minutes]);

  function getListData(value: any) {
    let listData: string[] = [];

    scheduledMinutes?.forEach(minute => {
      if (Number(minute?.start_date.slice(8, 10)) === value.date()) {
        listData = [minute?.project || ''];
      }
    });

    return listData;
  }

  function dateCellRender(value: any) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          // eslint-disable-next-line
          <li key={item} onClick={handleNavigateToSearchMinutes}>
            ATA: {item || 'Sem nome'}
          </li>
        ))}
      </ul>
    );
  }

  // eslint-disable-next-line consistent-return
  function getMonthData(value: any) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value: any) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <Container>
      <div className="Home">
        <div className="Calendar">
          <h1>
            Agenda <img src={CalendarIcon} alt="" />
          </h1>
          <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
          />
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
