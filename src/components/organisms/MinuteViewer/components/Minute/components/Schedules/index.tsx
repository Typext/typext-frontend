import React from 'react';

import { useMinute } from 'contexts/minute';
import { Container } from './styles';

const Schedules = () => {
  const { minute } = useMinute();

  return (
    <Container>
      <h3>PAUTA</h3>

      <section className="description">
        {minute.minute.schedules?.map(topic => (
          <span>{topic}</span>
        ))}
      </section>
    </Container>
  );
};

export default Schedules;
