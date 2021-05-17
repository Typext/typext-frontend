import React, { useEffect, useState } from 'react';
import { useMinute } from 'contexts/minute';

import warnIcon from 'assets/warn.svg';

import Input from 'components/atoms/Input';
import Loader from 'components/molecules/Loader';
import Button from 'components/atoms/Button';
import ListHeader from './components/ListHeader';
import MinuteInfo from './components/MinuteInfo';

import { Container } from './styles';
import ModalMinute from './components/ModalMinute';

const MinutesList: React.FC = () => {
  const { getMinutes, minutes, minutesError, minutesLoader } = useMinute();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    getMinutes();
  }, [getMinutes]);

  return (
    <Container>
      <h1>Lista de Atas</h1>
      <div className="search-minute">
        <Input color="var(--black)" styleWidth="38.75rem" />
        <Button type="button" sizeComponent="normal" styleComponent="red">
          Buscar
        </Button>
      </div>

      <ListHeader />
      <div className="list-content">
        {minutesLoader ? (
          <Loader />
        ) : minutesError === '' ? (
          minutes.map(minute => (
            <>
              {isOpenModal && (
                <ModalMinute
                  onClose={handleOpenModal}
                  id={minute?.id}
                  title={minute?.project}
                  date={minute?.created_at
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('/')}
                  status={minute?.status}
                />
              )}
              <MinuteInfo
                onClick={handleOpenModal}
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
            </>
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
