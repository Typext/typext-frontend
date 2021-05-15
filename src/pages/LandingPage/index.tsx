import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as WorkInProgress } from 'assets/workInProgress.svg';

import Button from 'components/atoms/Button';
import { Container } from './styles';

const LandingPage = () => {
  const history = useHistory();

  const handleNavigateToHome = useCallback(() => {
    history.push('/home');
  }, [history]);

  return (
    <Container>
      <h1>LandingPage</h1>
      <p>Working in progress</p>
      <Button
        type="button"
        styleComponent="red"
        sizeComponent="normal"
        onClick={handleNavigateToHome}
      >
        HOME
      </Button>
      <WorkInProgress />
    </Container>
  );
};

export default LandingPage;
