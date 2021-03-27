import React from 'react';

import { Container } from './styles';

import { IMinute } from '../../DTOs';

interface ISubjectsProps {
  data: IMinute;
}

const Subjects = ({ data }: ISubjectsProps) => {
  const { subjects } = data;

  return (
    <Container>
      <h3>Pauta</h3>

      <section className="description">
        {subjects?.map(subject => (
          <span>{subject.subject}</span>
        ))}
      </section>
    </Container>
  );
};

export default Subjects;
