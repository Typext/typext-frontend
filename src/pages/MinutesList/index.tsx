/* eslint-disable import/extensions */
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
import ModalMinuteLog from './components/ModalMinuteLog';

const MinutesList: React.FC = () => {
  const { getMinutes, minutes, minutesError, minutesLoader } = useMinute();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMinuteViewer, setIsOpenMinuteViewer] = useState(false);
  const [isOpenModalMinuteLog, setIsOpenModalMinuteLog] = useState(false);
  const [selectedMinute, setSeletedMinute] = useState<any>();
  const [searchValue, setSearchValue] = useState<string>();

  const handleOpenModal = (minute: any) => {
    setIsOpenModal(!isOpenModal);

    if (minute) setSeletedMinute(minute);
  };

  const handleOpenMinuteViewer = () => {
    handleOpenModal(null);
    setIsOpenMinuteViewer(!isOpenMinuteViewer);
  };

  const handleOpenModalMinuteLog = () => {
    handleOpenModal(null);
    setIsOpenModalMinuteLog(!isOpenModalMinuteLog);
  };

  const handleFilter = (e: { target: { value: string } }) => {
    setSearchValue(e?.target?.value?.toLowerCase());
  };

  useEffect(() => {
    getMinutes();
  }, [getMinutes]);

  return (
    <Container isOpenMinuteViewer={isOpenMinuteViewer}>
      <h1>Lista de Atas</h1>
      <div className="search-minute">
        <Input
          color="var(--black)"
          styleWidth="38.75rem"
          onChange={handleFilter}
        />
        <Button type="button" sizeComponent="normal" styleComponent="red">
          Buscar
        </Button>
      </div>

      {isOpenModal && (
        <ModalMinute
          handleOpenMinuteViewer={handleOpenMinuteViewer}
          handleOpenMinuteLog={handleOpenModalMinuteLog}
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

      {isOpenModalMinuteLog && (
        <ModalMinuteLog
          id={selectedMinute?.id}
          isOpen={isOpenModalMinuteLog}
          onClose={handleOpenModalMinuteLog}
        />
      )}

      <ListHeader />

      <div className="list-content">
        {minutesLoader ? (
          <Loader />
        ) : minutesError === '' ? (
          minutes
            .filter(
              minute =>
                Number(
                  minute?.project?.toLowerCase().indexOf(searchValue || ''),
                ) > -1,
            )
            .map(minute => (
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
