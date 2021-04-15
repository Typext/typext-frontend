import React from 'react';

import DefaultModal from 'components/DefaultModal';

import scheduleImage from 'assets/calendar.svg';

import { Container } from './styles';

interface ScheduleModalProps {
  setShowSchedule: Function;
}

const ScheduleModal = ({ setShowSchedule }: ScheduleModalProps) => {
  return (
    <Container>
      <DefaultModal onClose={setShowSchedule}>
        <div className="content">
          <img src={scheduleImage} alt="scheduleImage" />
          <h2>AGENDADO</h2>
          <h4>VOLTANDO...</h4>
        </div>
      </DefaultModal>
    </Container>
  );
};

export default ScheduleModal;
