import React from 'react';
import { IMinuteInfoProps } from './IMinuteInfoProps';

import { Container } from './styles';

const MinuteInfo: React.FC<IMinuteInfoProps> = ({
  title,
  date,
  status,
  schedule,
  ...rest
}: IMinuteInfoProps) => {
  return (
    <Container {...rest}>
      <div className="title">
        <strong>{title}</strong>
      </div>

      <div className="date">
        <strong>{date}</strong>
      </div>

      <div className="status">
        <strong>{status}</strong>
      </div>

      <div className="schedule">
        <strong>{schedule}</strong>
      </div>
    </Container>
  );
};

export default MinuteInfo;
