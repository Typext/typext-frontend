import React, { useState } from 'react';
import { message } from 'antd';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import AddIcon from 'assets/add_icon.svg';

import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import StyledDistributions from './styles';

interface DistributionsProps {
  setDistributions: Function
  distributions: Array<string>
}

const Distributions = ({ setDistributions, distributions } : DistributionsProps) => {
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

  return (
    <StyledDistributions>
      <div className="Distributions">
        <h1>Distribuições</h1>

        <div className="SectionDistributions">
          <div className="DataDepartments">
            <Input
              title="Área"
              Size="large"
              color="black"
              styleWidth="large"
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
                <BoxInformation key={distributionValue}>
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
