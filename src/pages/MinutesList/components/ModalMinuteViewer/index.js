import React, { useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useHistory } from 'react-router-dom';
import api from 'services/api';
import moment from 'moment';

import exitIcon from 'assets/exit_logo_red.svg';
import Button from 'components/atoms/Button';
import { useMinute } from 'contexts/minute';
import { getUser } from 'services/auth';

import MinuteToRender from './components/MinuteToRender';
import { Container, Modal } from './styles';

const ModalMinuteViewer = ({ onClose, isOpen, id }) => {
  const history = useHistory();
  const { minuteForReview, getSingleMinute } = useMinute();

  const minute = minuteForReview?.minute;

  const [isMinuteReviewed, setIsMinuteReviewed] = useState(
    minute?.status === 'revisada',
  );

  const user = getUser();

  useEffect(() => {
    getSingleMinute(id || '');
  }, [id, getSingleMinute]);

  const handleReviewMinute = async () => {
    if (isMinuteReviewed) return;

    try {
      await api.post('/reviews', {
        minute_id: String(minute.id),
        topic: minute.project,
        responsible: user.name,
        deadline: moment(minute.created_at).format('MM/DD/YYYY'),
      });
      setIsMinuteReviewed(true);
    } catch (error) {
      setIsMinuteReviewed(false);
    }
  };

  const handleCorrectMinute = () => {
    history.push(`/review/${id}`);
  };

  const componentRef = React.forwardRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleGenerateMinute = () => {
    handlePrint();
  };

  return (
    <Container>
      <Modal modalIsOpen={isOpen}>
        <header>
          <button type="button" onClick={onClose}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </header>

        <div className="content">
          <MinuteToRender
            title={minuteForReview?.minute.project}
            minute={minuteForReview}
            ref={componentRef}
          />
        </div>

        <div className="buttons">
          <Button
            type="button"
            sizeComponent="normal"
            styleComponent="black"
            onClick={handleGenerateMinute}
          >
            Baixar
          </Button>

          <Button
            type="button"
            sizeComponent="normal"
            styleComponent="red"
            onClick={handleCorrectMinute}
          >
            Corrigir
          </Button>

          {minute?.status === 'nova' && (
            <Button
              type="button"
              sizeComponent="normal"
              styleComponent="green"
              onClick={handleReviewMinute}
            >
              {isMinuteReviewed ? 'Revisado' : 'Revisar'}
            </Button>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default ModalMinuteViewer;
