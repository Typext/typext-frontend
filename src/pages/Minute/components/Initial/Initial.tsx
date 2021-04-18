/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';

import { MainContext } from 'contexts/main';

import Input from 'components/Input/Input';
import { StyledInitial } from './styles';

const Initial = () => {
  const { setAddressAndHour } = useContext(MainContext);

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
          <Input
            title="Local"
            color="var(--gray)"
            styleWidth="49.375rem"
            onChange={(e: any) => setLocal(e.target.value)}
          />

          <Input
            title="Data de Inicio"
            color="var(--gray)"
            styleWidth="23.75rem"
            type="date"
            onChange={(e: any) => setStartDate(e.target.value)}
          />

          <Input
            title="Horário de Inicio"
            color="var(--gray)"
            styleWidth="23.75rem"
            type="time"
            onChange={(e: any) => setStartHour(e.target.value)}
          />
        </form>
      </div>
    </StyledInitial>
  );
};

export default Initial;
