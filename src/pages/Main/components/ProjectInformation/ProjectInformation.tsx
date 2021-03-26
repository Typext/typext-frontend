import React from 'react';
// import Button from "../Button/Button";
import Input from 'components/Input/Input';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import StyledProjectInformation from './styles';

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

            {/* <Button /> */}
          </div>

          <div className="Users">
            <h2>Participantes</h2>

            <ScrollBox>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
              <h4>teste</h4>
            </ScrollBox>
          </div>
        </div>
      </div>
    </StyledProjectInformation>
  );
};

export default ProjectInformation;
