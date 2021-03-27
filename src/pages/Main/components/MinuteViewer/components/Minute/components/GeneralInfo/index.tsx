import React from 'react';
import moment from 'moment';

import { Container } from './styles';

const GeneralInfo = () => {
  return (
    <Container>
      <div className="minuteID">ATA N°</div>
      <div className="dateAndLocateInfo">
        <section className="date">
          <h4>Data:&nbsp;</h4>
          INICIO 02/03/2021 - FIM
          &nbsp;
          {moment().format('l')}
        </section>

        <section className="hour">
          <div className="startHour">
            <h4>Inicio:&nbsp;</h4>
            12h30
          </div>

          <div>
            <h4>Fim:&nbsp;</h4>
            {moment().format('HH:mm')}
          </div>
        </section>

        <section className="meetingLocate">
          <h4>Local:&nbsp;</h4>
          Avenida Cesare Monsueto Giulio Lattes, 1350 Distrito - Eugênio de
          Melo, São José dos Campos - SP, 12247-014
        </section>
      </div>
      <div className="logo">LOGO EMPRESA</div>
    </Container>
  );
};

export default GeneralInfo;
