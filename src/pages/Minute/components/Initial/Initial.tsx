/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { useMinute } from 'contexts/minute';

import Input from 'components/Input/Input';
import { StyledInitial } from './styles';

const Initial = () => {
  const { setDate, setPlace } = useMinute();

  const [startHour, setStartHour] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');

  useEffect(() => {
    if (startDate || startHour) {
      setDate({
        start_date: `${startDate}T${startHour}:00.007Z`,
        start: { hour: startHour, date: startDate },
      });
    }
  }, [startHour, startDate, setDate]);

  return (
    <StyledInitial>
      <div className="Initial">
        <h1>ATA DE REUNIÃO</h1>
        <form action="">
          <div className="Local">
            <Input
              title="Local"
              color="var(--black)"
              styleWidth="100%"
              onChange={(e: any) => setPlace(e.target.value)}
            />
          </div>
          <div className="HorarioData">
            <Input
              title="Data de Inicio"
              color="var(--black)"
              styleWidth="100%"
              type="date"
              onChange={(e: any) => setStartDate(e.target.value)}
            />

            <Input
              title="Horário"
              color="var(--black)"
              styleWidth="100%"
              type="time"
              onChange={(e: any) => setStartHour(e.target.value)}
            />
          </div>
        </form>
      </div>
    </StyledInitial>
  );
};

export default Initial;
