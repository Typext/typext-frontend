import React, { useContext, useState } from 'react';
import { message } from 'antd';

import { MainContext } from 'contexts/main';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import AddIcon from 'assets/add_icon.svg';

import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import StyledDistributions from './styles';

const Distributions = () => {
  const { distributions, setDistributions } = useContext(MainContext);

  const [distribution, setDistribution] = useState<string>('');

  const handleCleanFields = () => {
    setDistribution('');
  };

  const handleInsertDistribution = () => {
    if (!distribution) {
      message.error('Todas os campos devem estar preenchidos');
    } else {
      setDistributions([...distributions, distribution]);

      handleCleanFields();
    }
  };

  const deleteDistributions = (value: string) => {
    setDistributions(distributions.filter(
      distributionValue => distributionValue !== value,
    ));
  };

  return (
    <StyledDistributions>
      <div className="Distributions">
        <h1>Distribuições</h1>

        <div className="SectionDistributions">
          <div className="DataDepartments">
            <Input
              title="Área"
              styleWidth="49.375rem"
              value={distribution}
              onChange={(e: any) => setDistribution(e.target.value)}
            />

            <Button
              color="var(--soft-pink)"
              colorText="var(--red-pink)"
              size="23.75rem"
              onClick={handleInsertDistribution}
            >
              Adicionar
              <img src={AddIcon} alt="" />
            </Button>
          </div>

          <div className="Departments">
            <ScrollBox>
              {distributions.map(distributionValue => (
                <BoxInformation
                  key={distributionValue}
                  deleteComponent={() => deleteDistributions(distributionValue)}
                >
                  <h4>{distributionValue}</h4>
                </BoxInformation>
              ))}

            </ScrollBox>
          </div>
        </div>
      </div>
    </StyledDistributions>
  );
};

export default Distributions;
