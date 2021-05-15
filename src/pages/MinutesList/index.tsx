import React, { useEffect } from 'react';
import { useMinute } from 'contexts/minute';

import warnIcon from 'assets/warn.svg';

import Input from 'components/atoms/Input';
import Loader from 'components/molecules/Loader';
import ListHeader from './components/ListHeader';
import MinuteInfo from './components/MinuteInfo';

import { Container } from './styles';

const MinutesList: React.FC = () => {
  const { getMinutes, minutes, minutesError, minutesLoader } = useMinute();

  useEffect(() => {
    getMinutes();
  }, [getMinutes]);

  return (
    <Container>
      <h1>Lista de Atas</h1>
      <Input color="var(--black)" />

      <ListHeader />
      <div className="list-content">
        {minutesLoader ? (
          <Loader />
        ) : minutesError === '' ? (
          minutes.map(minute => (
            <MinuteInfo
              key={minute?.project}
              title={minute?.project}
              date={minute?.created_at
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('/')}
              status={minute?.status}
              schedule={minute?.schedules}
            />
          ))
        ) : (
          <div className="warn">
            <img src={warnIcon} alt="" />
            <h1>OCORREU UM PROBLEMA</h1>
            <h3>{minutesError?.toUpperCase()}</h3>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MinutesList;
