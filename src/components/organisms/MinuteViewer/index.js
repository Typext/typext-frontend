import React from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import Button from 'components/atoms/Button';
import Minute from './components/Minute';
import { useMinute } from 'contexts/minute';

import { Container } from './styles';

const MinuteViewer = ({ setShowMinute }) => {
  const componentRef = React.forwardRef();

  const { minute } = useMinute();

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
      <Minute ref={componentRef} minute={minute} />
      <div className="minuteButtons">
        <Button
          sizeComponent="normal"
          styleComponent="gray"
          onClick={handleCloseModal}
        >
          Voltar
        </Button>
        <Button
          type="button"
          sizeComponent="normal"
          styleComponent="green"
          onClick={handleGenerateMinute}
        >
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
