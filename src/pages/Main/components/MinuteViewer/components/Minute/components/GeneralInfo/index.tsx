import React from 'react';
import moment from 'moment';

import iacitLogo from 'assets/iacit_logo.jpg';

import { Container } from './styles';

import { IAddressAndHour } from '../../DTOs';

interface IGeneralInfoProps {
  addressAndHour: IAddressAndHour;
}

const GeneralInfo = ({ addressAndHour }: IGeneralInfoProps) => {
  return (
    <Container>
      <div className="minuteID">ATA N°</div>
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
