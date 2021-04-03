import React from 'react';

import { ITopic } from 'DTOs';
import { Container } from './styles';

interface ITopicsProps {
  topics: Array<ITopic>;
}

const Topics = ({ topics }: ITopicsProps) => {
  return (
    <Container>
      <h3>PAUTA</h3>

      <section className="description">
        {topics?.map(topic => (
          <span>{topic.topic}</span>
        ))}
      </section>
    </Container>
  );
};

export default Topics;
