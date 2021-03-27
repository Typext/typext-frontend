import React from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import Button from 'components/Button/Button';

import Minute from './components/Minute';

import { Container } from './styles';

const MinuteViewer = ({ setShowMinute }) => {
  const componentRef = React.forwardRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCloseModal = () => {
    if (setShowMinute) setShowMinute(false);
  };

  return (
    <Container>
      <Minute ref={componentRef} />
      <Button color="#e02041" onClick={handleCloseModal}>
        Voltar
      </Button>
      <Button color="#373435" onClick={handlePrint}>
        Gerar ATA
      </Button>
    </Container>
  );
};

MinuteViewer.propTypes = {
  setShowMinute: PropTypes.func.isRequired,
};

export default MinuteViewer;
