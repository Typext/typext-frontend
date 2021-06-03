import React from 'react';

import { Container } from './styles';

const ListHeaderLog: React.FC = () => {
  return (
    <Container>
      <button type="button" className="modification">
        Alteração
      </button>

      <button type="button" className="date">
        Data
      </button>

      <button type="button" className="modified-by">
        Alterada por:
      </button>
    </Container>
  );
};

export default ListHeaderLog;
