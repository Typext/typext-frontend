import React from 'react';

import { ReactComponent as Like } from 'assets/like.svg';

import { Container } from './styles';

const UpdateSuccess = () => {
  return (
    <Container>
      <Like />

      <h1>ATUALIZADO!</h1>

      <p>VOLTANDO...</p>
    </Container>
  );
};

export default UpdateSuccess;
