import React from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import Button from 'components/Button/Button';
import Minute from './components/Minute';
import { useMinute } from 'contexts/minute';

import { Container } from './styles';

const MinuteViewer = ({ setShowMinute }) => {
  const {
    addressAndHour,
    distributions,
    projectInfo,
    subjects,
    topics,
  } = useMinute();
  const componentRef = React.forwardRef();

  const minute = {
    addressAndHour,
    distributions,
    projectInfo,
    subjects,
    topics,
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCloseModal = () => {
    if (setShowMinute) setShowMinute(false);
  };

  const handleGenerateMinute = () => {
    const minuteId = localStorage.getItem('minuteID');

    if (minuteId) {
      localStorage.setItem('minuteID', Number(minuteId) + 1);
    } else {
      localStorage.setItem('minuteID', 1);
    }

    handlePrint();
  };

  return (
    <Container>
      <Minute ref={componentRef} minute={minute} />
      <div className="minuteButtons">
        <Button color="#e02041" onClick={handleCloseModal}>
          Voltar
        </Button>
        <Button color="#373435" onClick={handleGenerateMinute}>
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
