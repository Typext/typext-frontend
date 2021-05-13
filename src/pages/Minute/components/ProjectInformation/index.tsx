import React, { useState } from 'react';

import { useMinute } from 'contexts/minute';

import Input from 'components/Input/Input';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';

import { message } from 'antd';

import { StyledProjectInformation, Button } from './styles';

import addIcon from '../../../../assets/add_icon.svg';

const ProjectInformation = () => {
  const {
    minute,
    setProject,
    setParticipants,
    handleSetParticipants,
  } = useMinute();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleCleanFields = () => {
    setName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setTitle('');
  };

  // eslint-disable-next-line consistent-return
  const handleCreateMember = () => {
    const pattern = /\S+@\S+\.\S+/;

    if (!pattern.test(email)) {
      message.error('Insira um email valido');
      return null;
    }

    handleSetParticipants({ name, phone, email, company, title });
    handleCleanFields();
  };

  const deleteMember = (participant: string) => {
    setParticipants(
      minute.participant.filter(user => user.name !== participant),
    );
  };

  return (
    <StyledProjectInformation>
      <div className="ProjectInformation">
        <h1>Informações do Projeto</h1>

        <Input
          title="Nome do Projeto"
          Size="2.375rem"
          color="var(--black)"
          styleWidth="102.1rem"
          onChange={(e: any) => setProject(e.target.value)}
        />

        <div className="AddUsers">
          <div className="DataUser">
            <h1>Lista de Participantes</h1>

            <div className="NameTitle">
              <Input
                title="Nome completo"
                color="var(--black)"
                styleWidth="100%"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />

              <Input
                title="Título / Cargo"
                color="var(--black)"
                styleWidth="100%"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
              />
            </div>

            <div className="CompanyPhoneEmail">
              <Input
                title="Empresa"
                color="var(--black)"
                styleWidth="100%"
                value={company}
                onChange={(e: any) => setCompany(e.target.value)}
              />

              <Input
                color="var(--black)"
                title="Telefone"
                styleWidth="100%"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
              />

              <Input
                title="E-mail"
                color="var(--black)"
                styleWidth="100%"
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
            <h2>Participantes Adicionados:</h2>

            <ScrollBox>
              {minute.participant.map(member => (
                <BoxInformation
                  deleteComponent={() => deleteMember(member.name)}
                >
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
