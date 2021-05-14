import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import InputForm from 'components/InputForm';
import { useMinute } from 'contexts/minute';
import Input from 'components/Input/Input';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import addIcon from 'assets/add_icon.svg';

import getValidationErrors from 'utils/getValidationErrors';
import { IParticipant } from 'DTOs/Minute';

import { schema } from './validation';
import { StyledProjectInformation, Button, Form } from './styles';

const ProjectInformation = () => {
  const {
    minute,
    setProject,
    setParticipants,
    handleSetParticipants,
  } = useMinute();

  const formRef = useRef<FormHandles>(null);

  const deleteMember = (participant: string) => {
    setParticipants(
      minute.participant.filter(user => user.name !== participant),
    );
  };

  const handleCreateMember = useCallback(
    async (data: IParticipant, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, { abortEarly: false });

        handleSetParticipants(data);
        reset();
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [handleSetParticipants],
  );

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

            <Form ref={formRef} onSubmit={handleCreateMember}>
              <section className="inputs">
                <InputForm
                  title="Nome completo"
                  name="name"
                  color="var(--black)"
                  maxSize="38rem"
                />

                <InputForm
                  title="Título / Cargo"
                  name="title"
                  color="var(--black)"
                  maxSize="20rem"
                />

                <InputForm
                  title="Empresa"
                  name="company"
                  color="var(--black)"
                  maxSize="20rem"
                />

                <InputForm
                  color="var(--black)"
                  name="phone"
                  title="Telefone"
                  maxSize="18rem"
                />

                <InputForm
                  title="E-mail"
                  name="email"
                  color="var(--black)"
                  maxSize="20rem"
                />
              </section>

              <Button
                color="var(--soft-pink)"
                colorText="var(--red-pink)"
                size="23.75rem"
                type="submit"
              >
                Adicionar
                <img src={addIcon} alt="" />
              </Button>
            </Form>
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
