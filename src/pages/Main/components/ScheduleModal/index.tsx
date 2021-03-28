import React from 'react';

import scheduleImage from 'assets/calendar.svg';
import exit_icon from 'assets/exit_logo_red.svg';

import { Container } from './styles';

interface IScheduleModalProps {
  setShowSchedule: Function;
}

const ScheduleModal = ({ setShowSchedule }: IScheduleModalProps) => {
  const handleCloseModal = () => {
    if (setShowSchedule) setShowSchedule();
  };

  return (
    <Container>
      <div className="modal">
        <header>
          <button type="button" onClick={handleCloseModal}>
            <img src={exit_icon} alt="exit_icon" />
          </button>
        </header>

        <div className="content">
          <img src={scheduleImage} alt="scheduleImage" />
          <h2>AGENDADO</h2>
          <h4>VOLTANDO...</h4>
        </div>
      </div>
    </Container>
  );
};

export default ScheduleModal;
