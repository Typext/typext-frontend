import React from 'react';

import { ReactComponent as WorkInProgress } from 'assets/workInProgress.svg';

import { Container } from './styles';

const LandingPage = () => {
  return (
    <Container>
      <h1>LandingPage</h1>
      <p>Working in progress</p>
      <WorkInProgress />
    </Container>
  );
};

export default LandingPage;
