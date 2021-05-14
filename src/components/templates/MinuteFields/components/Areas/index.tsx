import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import { useMinute } from 'contexts/minute';

import InputForm from 'components/atoms/InputForm';
import Button from 'components/atoms/Button';
import ScrollBox from 'components/atoms/ScrollBox';
import BoxInformation from 'components/molecules/BoxInformation/BoxInformation';
import getValidationErrors from 'utils/getValidationErrors';
import AddIcon from 'assets/add_icon.svg';

import { schema } from './validation';
import { StyledAreas, Form } from './styles';

const Areas = () => {
  const formRef = useRef<FormHandles>(null);

  const { minute, handleSetAreas, setAreas } = useMinute();

  const deleteAreas = (value: string) => {
    setAreas(minute.minute.areas.filter(eachArea => eachArea !== value));
  };

  const handleInsertArea = useCallback(
    async (data: { area: string }, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, { abortEarly: false });

        handleSetAreas(data.area);
        reset();
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [handleSetAreas],
  );

  return (
    <StyledAreas>
      <div className="Areas">
        <h1>Distribuições</h1>

        <div className="SectionAreas">
          <Form ref={formRef} onSubmit={handleInsertArea}>
            <InputForm title="Área" maxSize="100%" name="area" />

            <Button
              color="var(--soft-pink)"
              colorText="var(--red-pink)"
              size="23.75rem"
            >
              Adicionar
              <img src={AddIcon} alt="" />
            </Button>
          </Form>

          <div className="Departments">
            <h3>Distribuições adicionadas:</h3>
            {minute.minute.areas.length > 0 && (
              <ScrollBox>
                {minute?.minute?.areas?.map(eachArea => (
                  <BoxInformation
                    key={eachArea}
                    deleteComponent={() => deleteAreas(eachArea)}
                  >
                    <h4>{eachArea}</h4>
                  </BoxInformation>
                ))}
              </ScrollBox>
            )}
          </div>
        </div>
      </div>
    </StyledAreas>
  );
};

export default Areas;