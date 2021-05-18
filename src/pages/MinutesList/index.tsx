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
import ModalMinuteViewer from './components/ModalMinuteViewer';

const MinutesList: React.FC = () => {
  const { getMinutes, minutes, minutesError, minutesLoader } = useMinute();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMinuteViewer, setIsOpenMinuteViewer] = useState(false);
  const [selectedMinute, setSeletedMinute] = useState<any>();

  const handleOpenModal = (minute: any) => {
    setIsOpenModal(!isOpenModal);

    if (minute) setSeletedMinute(minute);
  };

  const handleOpenMinuteViewer = () => {
    handleOpenModal(null);
    setIsOpenMinuteViewer(!isOpenMinuteViewer);
  };

  useEffect(() => {
    getMinutes();
  }, [getMinutes]);

  return (
    <Container isOpenMinuteViewer={isOpenMinuteViewer}>
      <h1>Lista de Atas</h1>
      <div className="search-minute">
        <Input color="var(--black)" styleWidth="38.75rem" />
        <Button type="button" sizeComponent="normal" styleComponent="red">
          Buscar
        </Button>
      </div>

      {isOpenModal && (
        <ModalMinute
          handleOpenMinuteViewer={handleOpenMinuteViewer}
          onClose={handleOpenModal}
          id={selectedMinute?.id}
          title={selectedMinute?.project}
          date={selectedMinute?.created_at
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('/')}
          status={selectedMinute?.status}
        />
      )}

      {isOpenMinuteViewer && (
        <ModalMinuteViewer
          id={selectedMinute?.id}
          isOpen={isOpenMinuteViewer}
          onClose={handleOpenMinuteViewer}
        />
      )}

      <ListHeader />
      <div className="list-content">
        {minutesLoader ? (
          <Loader />
        ) : minutesError === '' ? (
          minutes.map(minute => (
            <>
              <MinuteInfo
                onClick={() => handleOpenModal(minute)}
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
