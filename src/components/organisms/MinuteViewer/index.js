import React from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import Button from 'components/atoms/Button';
import Minute from './components/Minute';
import { useMinute } from 'contexts/minute';

import { Container } from './styles';

const MinuteViewer = ({ setShowMinute }) => {
  const componentRef = React.forwardRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCloseModal = () => {
    if (setShowMinute) setShowMinute(false);
  };

  const handleGenerateMinute = () => {
    handlePrint();
  };

  return (
    <Container>
      <Minute ref={componentRef} />
      <div className="minuteButtons">
        <Button color="#e02041" onClick={handleCloseModal}>
          Voltar
        </Button>
        <Button color="#373435" onClick={handleGenerateMinute}>
          Baixar PDF
        </Button>
      </div>
    </Container>
  );
};

MinuteViewer.propTypes = {
  setShowMinute: PropTypes.func.isRequired,
};

export default MinuteViewer;
