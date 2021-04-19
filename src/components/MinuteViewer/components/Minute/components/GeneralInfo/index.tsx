import React, { useEffect, useState } from 'react';
import moment from 'moment';

import iacitLogo from 'assets/iacit_logo.jpg';

import { IAddressAndHour } from 'DTOs';
import { Container } from './styles';

interface IGeneralInfoProps {
  addressAndHour: IAddressAndHour;
}

const GeneralInfo = ({ addressAndHour }: IGeneralInfoProps) => {
  const [minuteId, setMinuteId] = useState(1);

  useEffect(() => {
    const minutesGenerated = localStorage.getItem('minuteID');

    if (minutesGenerated) {
      setMinuteId(Number(minutesGenerated) + 1);
    }
  }, []);

  return (
    <Container>
      <div className="minuteID">
        ATA N°
        {' '}
        {minuteId}
        2021
      </div>
      <div className="dateAndLocateInfo">
        <section className="date">
          <h4>Data:&nbsp;</h4>
          INICIO
          {' '}
          {addressAndHour.startDate}
          {' '}
          - FIM &nbsp;
          {moment().format('l')}
        </section>

        <section className="hour">
          <div className="startHour">
            <h4>Inicio:&nbsp;</h4>
            {addressAndHour.startHour}
          </div>

          <div>
            <h4>Fim:&nbsp;</h4>
            {moment().format('HH:mm')}
          </div>
        </section>

        <section className="meetingLocate">
          <h4>Local:&nbsp;</h4>
          {addressAndHour.local}
        </section>
      </div>
      <div className="logo">
        <img src={iacitLogo} alt="enterprise_logo" />
      </div>
    </Container>
  );
};

export default GeneralInfo;
