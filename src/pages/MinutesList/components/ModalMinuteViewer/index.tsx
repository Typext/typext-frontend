import React, { useEffect } from 'react';

import exitIcon from 'assets/exit_logo_red.svg';

import Minute from 'components/organisms/Minute';
import Button from 'components/atoms/Button';
import { useMinute } from 'contexts/minute';
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

  useEffect(() => {
    getSingleMinute(id || '');
  }, [id, getSingleMinute]);

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

          <Button type="button" sizeComponent="normal" styleComponent="green">
            Revisado
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default ModalMinuteViewer;
