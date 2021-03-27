import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';

import StyledProjectInformation from './styles';

import addIcon from '../../../../assets/add_icon.svg';

const ProjectInformation = () => {
  return (
    <StyledProjectInformation>
      <div className="ProjectInformation">
        <h1>INFORMAÇÕES DO PROJETO</h1>

        <Input
          title="Nome do Projeto"
          size="large"
          color="red-pink"
          styleWidth="large"
          type="text"
        />

        <div className="AddUsers">
          <div className="DataUser">
            <h1>Adicionar Participantes</h1>

            <div className="NameTitle">
              <Input
                title="Nome completo do Participante"
                size="medium"
                color="black"
                styleWidth="large"
                type="text"
              />

              <Input
                title="Título / Cargo"
                size="medium"
                color="black"
                styleWidth="medium"
                type="text"
              />
            </div>

            <div className="CompanyPhoneEmail">
              <Input
                title="Empresa"
                size="medium"
                color="black"
                styleWidth="medium"
                type="text"
              />

              <Input
                title="Telefone"
                size="medium"
                color="black"
                styleWidth="medium"
                type="number"
              />

              <Input
                title="E-mail"
                size="medium"
                color="black"
                styleWidth="medium"
                type="text"
              />
            </div>

            <Button
              color="var(--soft-pink)"
              colorText="var(--red-pink)"
              size="23.75rem"
            >
              Adicionar
              <img src={addIcon} alt="" />
            </Button>
          </div>

          <div className="Users">
            <h2>Participantes</h2>

            <ScrollBox>
              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>
              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>

              <BoxInformation>
                <h4>macaco</h4>
              </BoxInformation>
            </ScrollBox>
          </div>
        </div>
      </div>
    </StyledProjectInformation>
  );
};

export default ProjectInformation;
