import React from 'react';

import Button from 'components/atoms/Button';

import { Container } from './styles';

const Participants = () => {
  return (
    <Container>
      <Button type="button" styleComponent="gray" sizeComponent="normal">
        Participante 1
      </Button>
      <Button type="button" styleComponent="gray" sizeComponent="normal">
        Participante 2
      </Button>
      <Button type="button" styleComponent="gray" sizeComponent="normal">
        Participante 3
      </Button>
      <Button type="button" styleComponent="gray" sizeComponent="normal">
        Participante 4
      </Button>
    </Container>
  );
};

export default Participants;
