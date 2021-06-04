import React from 'react';

import { Container } from './styles';

const ListHeaderLog: React.FC = () => {
  return (
    <Container>
      <div className="modification">
        <strong>Alteração</strong>
      </div>

      <div className="date">
        <strong>Data</strong>
      </div>

      <div className="modified-by">
        <strong>Alterada por:</strong>
      </div>
    </Container>
  );
};

export default ListHeaderLog;
