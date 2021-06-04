import React from 'react';

import { IMinute } from 'DTOs';
import { Container } from './styles';

interface SchedulesProps {
  minute: IMinute | undefined;
}
const Schedules = ({ minute }: SchedulesProps) => {
  return (
    <Container>
      <h3>PAUTA</h3>

      <section className="description">
        {minute?.minute.schedules?.map(topic => (
          <span>{topic}</span>
        ))}
      </section>
    </Container>
  );
};

export default Schedules;
