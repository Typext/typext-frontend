/* eslint-disable prettier/prettier */
import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useMinute } from 'contexts/minute';

import InputForm from 'components/atoms/InputForm';
import Button from 'components/atoms/Button';
import BoxInformation from 'components/molecules/BoxInformation/BoxInformation';
import ScrollBox from 'components/atoms/ScrollBox';

import getValidationErrors from 'utils/getValidationErrors';

import { schema } from './validation';
import { StyledSchedules, Form } from './styles';

const Schedules = () => {
  const formRef = useRef<FormHandles>(null);

  const { minute, handleSetSchedules, setSchedules } = useMinute();

  const deleteSchedules = (value: string) => {
    setSchedules(
      minute.minute.schedules.filter(schedule => schedule !== value),
    );
  };

  const handleInsertSchedule = useCallback(
    async (data: { schedule: string }, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, { abortEarly: false });

        handleSetSchedules(data.schedule);
        reset();
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [handleSetSchedules],
  );

  return (
    <StyledSchedules>
      <h1>Pauta</h1>

      <div className="schedule">
        <Form ref={formRef} onSubmit={handleInsertSchedule}>
          <InputForm title="Pauta" maxSize="100%" name="schedule" />

          <Button styleComponent="add" sizeComponent="normal" type="submit">
            Adicionar
          </Button>
        </Form>

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
