import React from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import Button from 'components/Button/Button';

import Minute from './components/Minute';

import { Container } from './styles';

const MinuteViewer = ({ setShowMinute, minute }) => {
  const componentRef = React.forwardRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCloseModal = () => {
    if (setShowMinute) setShowMinute(false);
  };

  return (
    <Container>
      <Minute ref={componentRef} minute={minute} />
      <div className="minuteButtons">
        <Button color="#e02041" onClick={handleCloseModal}>
          Voltar
        </Button>
        <Button color="#373435" onClick={handlePrint}>
          Gerar ATA
        </Button>
      </div>
    </Container>
  );
};

MinuteViewer.propTypes = {
  setShowMinute: PropTypes.func.isRequired,
};

export default MinuteViewer;
