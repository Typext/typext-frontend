import React from 'react';

import { ReactComponent as LoaderImage } from 'assets/loading.svg';

import { Container } from './styles';

const Loader = () => {
  return (
    <Container>
      <LoaderImage />
    </Container>
  );
};

export default Loader;
