import React from 'react';

import { IMinute } from 'DTOs';
import { Container } from './styles';

interface ProjectProps {
  minute: IMinute;
}

const Project = ({ minute }: ProjectProps) => {
  return (
    <Container>
      <section className="projectName">
        <h4>Projeto:&nbsp;</h4>
        {minute.minute.project}
      </section>

      <section className="meetingMembers">
        <div className="titleExamples">
          <h4>Participante</h4>
          <h4>Área</h4>
          <h4>E-mail</h4>
          <h4>Telefone</h4>
        </div>

        {minute?.participant?.map(participant => (
          <div className="member">
            <span>{participant.name}</span>
            <span>{participant.title}</span>
            <span>{participant.email}</span>
            <span>{participant.phone}</span>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Project;