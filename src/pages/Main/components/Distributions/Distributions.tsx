import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import AddIcon from 'assets/add_icon.svg';

import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import StyledDistributions from './styles';

const Distributions = () => {
  return (
    <StyledDistributions>
      <div className="Distributions">
        <h1>Distribuições</h1>

        <div className="SectionDistributions">
          <div className="DataDepartments">
            <Input
              title="Nome da área"
              Size="large"
              color="black"
              styleWidth="large"
            />

            <Button
              color="var(--soft-pink)"
              colorText="var(--red-pink)"
              size="23.75rem"
            >
              Adicionada
              <img src={AddIcon} alt="" />
            </Button>
          </div>

          <div className="Departments">
            <ScrollBox>
              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>Evandro Macaco</h4>
              </BoxInformation>
            </ScrollBox>
          </div>
        </div>
      </div>
    </StyledDistributions>
  );
};

export default Distributions;
