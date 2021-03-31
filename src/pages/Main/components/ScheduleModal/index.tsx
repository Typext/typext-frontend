import React, { useContext } from 'react';

import { MainContext } from 'contexts/MainContext';

import scheduleImage from 'assets/calendar.svg';
import exit_icon from 'assets/exit_logo_red.svg';

import { Container } from './styles';

const ScheduleModal = () => {
  const { setShowSchedule } = useContext(MainContext);

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
