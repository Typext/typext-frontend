/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import { StyledInitial } from './styles';

interface IInitialProps {
  setAddressAndHour: Function
}

const Initial = ({ setAddressAndHour }: IInitialProps) => {
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
        <h1>ATA de Reunião</h1>
        <form action="">
          <Input
            title="Local"
            color="black"
            Size="large"
            styleWidth="large"
            onChange={(e: any) => setLocal(e.target.value)}
          />

          <Input
            title="Data de Inicio"
            color="black"
            Size="large"
            styleWidth="medium"
            type="date"
            onChange={(e: any) => setStartDate(e.target.value)}
          />

          <Input
            title="Horário de Inicio"
            color="black"
            Size="large"
            styleWidth="medium"
            type="time"
            onChange={(e: any) => setStartHour(e.target.value)}
          />
        </form>
      </div>
    </StyledInitial>
  );
};

export default Initial;
