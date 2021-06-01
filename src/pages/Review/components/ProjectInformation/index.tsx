/* eslint-disable react/jsx-indent */
import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import InputForm from 'components/atoms/InputForm';
import { useReview } from 'contexts/review';
import Input from 'components/atoms/Input';
import ScrollBox from 'components/atoms/ScrollBox';
import BoxInformation from 'components/molecules/BoxInformation/BoxInformation';

import getValidationErrors from 'utils/getValidationErrors';
import { IMinute, IParticipant } from 'DTOs/Minute';

import Button from 'components/atoms/Button';
import { schema } from './validation';
import { StyledProjectInformation, Form } from './styles';

interface ProjectInfoProps {
  minute: IMinute | undefined;
}

const ProjectInformation = ({ minute }: ProjectInfoProps) => {
  const { setProject, setParticipants, handleSetParticipants } = useReview();

  const participants = minute?.participant;

  const formRef = useRef<FormHandles>(null);

  const deleteMember = (participant: string) => {
    setParticipants(
      minute?.participant?.filter(user => user.name !== participant),
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
          defaultValue={minute?.minute.project}
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

              <Button styleComponent="add" sizeComponent="normal" type="submit">
                Adicionar
              </Button>
            </Form>
          </div>

          <div className="Users">
            <h2>Participantes Adicionados:</h2>

            <ScrollBox>
              {participants?.map(member => (
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
