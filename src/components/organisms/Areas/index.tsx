import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import { useMinute } from 'contexts/minute';

import InputForm from 'components/atoms/InputForm';
import Button from 'components/atoms/Button';
import ScrollBox from 'components/atoms/ScrollBox';
import BoxInformation from 'components/molecules/BoxInformation/BoxInformation';
import getValidationErrors from 'utils/getValidationErrors';

import { IMinute } from 'DTOs';
import { schema } from './validation';
import { StyledAreas, Form } from './styles';

interface AreasProps {
  minute: IMinute | undefined;
}

const Areas = ({ minute }: AreasProps) => {
  const formRef = useRef<FormHandles>(null);

  const { handleSetAreas, setAreas } = useMinute();

  const deleteAreas = (value: string) => {
    setAreas(minute?.minute.areas.filter(eachArea => eachArea !== value));
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

            <Button type="button" styleComponent="add" sizeComponent="normal">
              Adicionar
            </Button>
          </Form>

          <div className="Departments">
            <h3>Distribuições adicionadas:</h3>
            {minute && minute?.minute?.areas?.length > 0 && (
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
