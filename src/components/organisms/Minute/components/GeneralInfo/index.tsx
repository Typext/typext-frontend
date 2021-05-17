import React from 'react';
import moment from 'moment';

import iacitLogo from 'assets/iacit_logo.jpg';

import { useMinute } from 'contexts/minute';

import { IMinute } from 'DTOs';
import { Container } from './styles';

interface GeneralInfoProps {
  minute: IMinute;
}

const GeneralInfo = ({ minute }: GeneralInfoProps) => {
  const { date } = useMinute();

  return (
    <Container>
      <div className="minuteID">ATA N° 012021</div>
      <div className="dateAndLocateInfo">
        <section className="date">
          <h4>Data:&nbsp;</h4>
          INICIO
          {' '}
          {date?.start?.date.split('-').reverse().join('/')}
          {' '}
          - FIM &nbsp;
          {moment().format('l')}
        </section>

        <section className="hour">
          <div className="startHour">
            <h4>Inicio:&nbsp;</h4>
            {date?.start?.hour}
          </div>

          <div>
            <h4>Fim:&nbsp;</h4>
            {moment().format('HH:mm')}
          </div>
        </section>

        <section className="meetingLocate">
          <h4>Local:&nbsp;</h4>
          {minute.minute.place}
        </section>
      </div>
      <div className="logo">
        <img src={iacitLogo} alt="enterprise_logo" />
      </div>
    </Container>
  );
};

export default GeneralInfo;
