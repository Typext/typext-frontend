import React from 'react';

import { Container } from './styles';

const ListHeader: React.FC = () => {
  return (
    <Container>
      <div className="title">Título</div>

      <div className="date">Data</div>

      <div className="status">Status</div>

      <div className="schedule">Pauta</div>
    </Container>
  );
};

export default ListHeader;
