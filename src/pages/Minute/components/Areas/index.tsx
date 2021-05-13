import React, { useState } from 'react';

import { useMinute } from 'contexts/minute';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import AddIcon from 'assets/add_icon.svg';

import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import StyledAreas from './styles';

const Areas = () => {
  const { minute, handleSetAreas, setAreas } = useMinute();

  const [area, setArea] = useState('');

  const handleInsertArea = () => {
    handleSetAreas(area);
    setArea('');
  };

  const deleteAreas = (value: string) => {
    setAreas(minute.minute.areas.filter(eachArea => eachArea !== value));
  };

  return (
    <StyledAreas>
      <div className="Areas">
        <h1>Distribuições</h1>

        <div className="SectionAreas">
          <div className="DataDepartments">
            <Input
              title="Área"
              styleWidth="100%"
              value={area}
              onChange={(e: any) => setArea(e.target.value)}
            />

            <Button
              color="var(--soft-pink)"
              colorText="var(--red-pink)"
              size="23.75rem"
              onClick={handleInsertArea}
            >
              Adicionar
              <img src={AddIcon} alt="" />
            </Button>
          </div>

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
