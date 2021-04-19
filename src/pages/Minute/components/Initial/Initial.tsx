/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { useMinute } from 'contexts/minute';

import Input from 'components/Input/Input';
import { StyledInitial } from './styles';

const Initial = () => {
  const { setAddressAndHour } = useMinute();

  const [local, setLocal] = useState<string>('');
  const [startHour, setStartHour] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');

  useEffect(() => {
    if (local || startDate || startHour) {
      setAddressAndHour({ local, startHour, startDate });
    }
  }, [local, startHour, startDate, setAddressAndHour]);

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
              onChange={(e: any) => setLocal(e.target.value)}
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
