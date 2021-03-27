import React from 'react';

import { Container } from './styles';

const MembersInfo = () => {
  return (
    <Container>
      <section className="projectName">
        <h4>Projeto:&nbsp;</h4>
        Reunião sobre os gasto com Infra e alimentação
      </section>

      <section className="meetingMembers">
        <div className="titleExamples">
          <h4>Participante</h4>
          <h4>Área</h4>
          <h4>E-mail</h4>
          <h4>Telefone</h4>
        </div>

        <div className="member">
          <span>Tony Ramos</span>
          <span>Gerente</span>
          <span>tr2021@gmail.com</span>
          <span>12 992929292</span>
        </div>

        <div className="member">
          <span>João Cleber</span>
          <span>Analista de dados</span>
          <span>jc2021@gmail.com</span>
          <span>12 991919191</span>
        </div>

        <div className="member">
          <span>Peter Parker</span>
          <span>Infra de dados</span>
          <span>pp2021@gmail.com</span>
          <span>12 993939393</span>
        </div>
      </section>
    </Container>
  );
};

export default MembersInfo;
