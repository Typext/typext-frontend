import React, { useState, useEffect, useContext } from 'react';

import { MainContext } from 'contexts/main';

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
  const { setProjectInfo } = useContext(MainContext);

  const [members, setMembers] = useState<IMembers[]>([]);

  const [projectName, setProjectName] = useState<string>('');

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

  // eslint-disable-next-line consistent-return
  const handleCreateMember = () => {
    const pattern = /\S+@\S+\.\S+/;

    if (!pattern.test(email)) {
      message.error('Insira um email valido');
      return null;
    }

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

  const deleteMember = (member: string) => {
    setMembers(members.filter(user => user.name !== member));
  };

  useEffect(() => {
    if (setProjectInfo) setProjectInfo({ projectName, members });
  }, [members, projectName, setProjectInfo]);

  return (
    <StyledProjectInformation>
      <div className="ProjectInformation">
        <h1>Informações do Projeto</h1>

        <Input
          title="Nome do Projeto"
          Size="2.375rem"
          color="var(--black)"
          styleWidth="102.1rem"
          onChange={(e: any) => setProjectName(e.target.value)}
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
                value={role}
                onChange={(e: any) => setRole(e.target.value)}
              />
            </div>

            <div className="CompanyPhoneEmail">
              <Input
                title="Empresa"
                color="var(--black)"
                styleWidth="100%"
                value={enterprise}
                onChange={(e: any) => setEnterprise(e.target.value)}
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
              {members.map(member => (
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
