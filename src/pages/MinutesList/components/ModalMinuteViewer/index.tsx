import React, { useEffect, useState } from 'react';

import exitIcon from 'assets/exit_logo_red.svg';

import Minute from 'components/organisms/Minute';
import Button from 'components/atoms/Button';
import { useMinute } from 'contexts/minute';
import api from 'services/api';
import { getUser } from 'services/auth';
import moment from 'moment';
import { Container, Modal } from './styles';

interface IModalMinuteViewer {
  onClose: () => void;
  isOpen: boolean;
  id: string | undefined;
}

const ModalMinuteViewer: React.FC<IModalMinuteViewer> = ({
  onClose,
  isOpen,
  id,
}: IModalMinuteViewer) => {
  const { minuteForReview, getSingleMinute } = useMinute();

  const minute: any = minuteForReview?.minute;

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

  return (
    <Container>
      <Modal modalIsOpen={isOpen}>
        <header>
          <button type="button" onClick={onClose}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </header>

        <div className="content">
          <Minute
            title={minuteForReview?.minute.project}
            minute={minuteForReview}
          />
        </div>

        <div className="buttons">
          <Button type="button" sizeComponent="normal" styleComponent="black">
            Baixar
          </Button>

          <Button type="button" sizeComponent="normal" styleComponent="red">
            Corrigir
          </Button>

          <Button
            type="button"
            sizeComponent="normal"
            styleComponent="green"
            onClick={handleReviewMinute}
          >
            {isMinuteReviewed ? 'Revisado' : 'Revisar'}
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default ModalMinuteViewer;
