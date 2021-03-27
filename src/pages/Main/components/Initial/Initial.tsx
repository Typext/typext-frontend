/* eslint-disable prettier/prettier */
import React from 'react';
import Input from 'components/Input/Input';
import { StyledInitial } from './styles';

const Initial = () => {
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
          />

          <Input
            title="Data de Inicio"
            color="black"
            Size="large"
            styleWidth="medium"
            type="date"
          />

          <Input
            title="Horário de Inicio"
            color="black"
            Size="large"
            styleWidth="medium"
            type="time"
          />
        </form>
      </div>
    </StyledInitial>
  );
};

export default Initial;
