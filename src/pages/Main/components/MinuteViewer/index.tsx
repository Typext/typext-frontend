import Button from 'components/Button/Button';
import React from 'react';

import { Container } from './styles';

interface MinuteViewerProps {
  setShowMinute: Function;
}

const MinuteViewer: React.FC<MinuteViewerProps> = ({
  setShowMinute,
}: MinuteViewerProps) => {
  const handleCloseModal = () => {
    if (setShowMinute) setShowMinute(false);
  };

  return (
    <Container>
      Just Testing Minute Modal
      <Button color="#ff0042" onClick={handleCloseModal}>
        Voltar
      </Button>
    </Container>
  );
};
export default MinuteViewer;
