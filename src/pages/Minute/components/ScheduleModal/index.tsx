import React, { useEffect } from 'react';

import DefaultModal from 'components/organisms/DefaultModal';

import scheduleImage from 'assets/calendar.svg';

import { useMinute } from 'contexts/minute';
import Loader from 'components/molecules/Loader';
import { Container } from './styles';

interface ScheduleModalProps {
  setShowSchedule: Function;
}

const ScheduleModal = ({ setShowSchedule }: ScheduleModalProps) => {
  const { scheduleMinute, scheduleError, scheduleLoading } = useMinute();

  useEffect(() => {
    if (scheduleMinute) {
      scheduleMinute();
    }
  }, []);

  return (
    <Container>
      <DefaultModal onClose={setShowSchedule}>
        <div className="content">
          {scheduleLoading ? (
            <Loader />
          ) : scheduleError ? (
            <>
              <h1>FALHA AO AGENDAR</h1>
              <h4>{scheduleError}</h4>
            </>
          ) : (
            <>
              <img src={scheduleImage} alt="scheduleImage" />
              <h1>AGENDADO</h1>
              <h4>ATA AGENDADO COM SUCESSO</h4>
            </>
          )}
        </div>
      </DefaultModal>
    </Container>
  );
};

export default ScheduleModal;
