import React, { useState } from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';

import { message } from 'antd';

import StyledProjectInformation from './styles';

import addIcon from '../../../../assets/add_icon.svg';

interface IMembers {
  name: string;
  phone: string;
  email: string;
  role: string;
  enterprise: string;
}

const ProjectInformation = () => {
  const [members, setMembers] = useState<IMembers[]>([]);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [enterprise, setEnterprise] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const handleCleanFields = () => {
    setName('');
    setPhone('');
    setEmail('');
    setEnterprise('');
    setRole('');
  };

  const handleCreateMember = () => {
    if (!name || !phone || !email || !role || !enterprise) {
      message.error('Todas os campos devem estar preenchidos');
    } else {
      setMembers([
        ...members,
        {
          name,
          phone,
          email,
          role,
          enterprise,
        },
      ]);

      handleCleanFields();
    }
  };

  return (
    <StyledProjectInformation>
      <div className="ProjectInformation">
        <h1>INFORMAÇÕES DO PROJETO</h1>

        <Input
          title="Nome do Projeto"
          Size="large"
          color="red-pink"
          styleWidth="large"
        />

        <div className="AddUsers">
          <div className="DataUser">
            <h1>Adicionar Participantes</h1>

            <div className="NameTitle">
              <Input
                title="Nome completo do Participante"
                color="black"
                styleWidth="large"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />

              <Input
                title="Título / Cargo"
                color="black"
                styleWidth="medium"
                value={role}
                onChange={(e: any) => setRole(e.target.value)}
              />
            </div>

            <div className="CompanyPhoneEmail">
              <Input
                title="Empresa"
                color="black"
                styleWidth="medium"
                value={enterprise}
                onChange={(e: any) => setEnterprise(e.target.value)}
              />

              <Input
                title="Telefone"
                color="black"
                styleWidth="medium"
                type="number"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
              />

              <Input
                title="E-mail"
                color="black"
                styleWidth="medium"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>

            <Button
              color="var(--soft-pink)"
              colorText="var(--red-pink)"
              size="23.75rem"
              onClick={handleCreateMember}
            >
              Adicionar
              <img src={addIcon} alt="" />
            </Button>
          </div>

          <div className="Users">
            <h2>Participantes</h2>

            <ScrollBox>
              {members.map(member => (
                <BoxInformation>
                  <h4>{member.name}</h4>
                </BoxInformation>
              ))}
            </ScrollBox>
          </div>
        </div>
      </div>
    </StyledProjectInformation>
  );
};

export default ProjectInformation;
