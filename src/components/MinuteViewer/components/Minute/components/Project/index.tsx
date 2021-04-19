import React from 'react';

import { IProjectInfo } from 'DTOs';
import { Container } from './styles';

interface IProjectProps {
  projectInfo: IProjectInfo;
}

const Project = ({ projectInfo }: IProjectProps) => {
  return (
    <Container>
      <section className="projectName">
        <h4>Projeto:&nbsp;</h4>
        {projectInfo.projectName}
      </section>

      <section className="meetingMembers">
        <div className="titleExamples">
          <h4>Participante</h4>
          <h4>Área</h4>
          <h4>E-mail</h4>
          <h4>Telefone</h4>
        </div>

        {projectInfo.members.map(member => (
          <div className="member">
            <span>{member.name}</span>
            <span>{member.role}</span>
            <span>{member.email}</span>
            <span>{member.phone}</span>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Project;
