/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { useMinute } from 'contexts/minute';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import ScrollBox from 'components/ScrollBox/ScrollBox';

import addIcon from '../../../../assets/add_icon.svg';

import { StyledSchedules } from './styles';

const Schedules = () => {
  const { minute, handleSetSchedules, setSchedules } = useMinute();

  const [scheduleName, setScheduleName] = useState<string>('');

  const handleInsertSchedule = () => {
    handleSetSchedules(scheduleName);
    setScheduleName('');
  };

  const deleteSchedules = (value: string) => {
    setSchedules(
      minute.minute.schedules.filter(schedule => schedule !== value),
    );
  };

  return (
    <StyledSchedules>
      <h1>Pauta</h1>

      <div className="schedule">
        <div className="addSchedule">
          <Input
            title="Pauta"
            styleWidth="100%"
            value={scheduleName}
            onChange={(e: any) => setScheduleName(e.target.value)}
          />

          <Button
            color="var(--soft-pink)"
            colorText="var(--red-pink)"
            size="23.75rem"
            onClick={handleInsertSchedule}
          >
            Adicionar
            <img src={addIcon} alt="" />
          </Button>
        </div>

        <div className="scheduleList">
          <h3>Pautas adicionadas:</h3>
          <ScrollBox>
            {minute.minute.schedules?.map(schedule => (
              <BoxInformation
                key={schedule}
                deleteComponent={() => deleteSchedules(schedule)}
              >
                <h4>{schedule}</h4>
              </BoxInformation>
            ))}
          </ScrollBox>
        </div>
      </div>
    </StyledSchedules>
  );
};

export default Schedules;
