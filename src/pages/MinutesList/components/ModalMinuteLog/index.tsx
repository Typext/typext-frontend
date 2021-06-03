import React from 'react';

import exitIcon from 'assets/exit_logo_red.svg';

import { Container, Modal } from './styles';
import ListHeaderLog from './components/ListHeaderLog';

export interface IModalMinuteLog {
  onClose: () => void;
  isOpen: boolean;
  id: string | undefined;
}

const ModalMinuteLog: React.FC<IModalMinuteLog> = ({
  onClose,
  isOpen,
  id,
}: IModalMinuteLog) => {
  return (
    <Container>
      <Modal isOpen={isOpen}>
        <header>
          <button type="button" onClick={onClose}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </header>

        <h1>Histórico de alterações</h1>

        <ListHeaderLog />
      </Modal>
    </Container>
  );
};

export default ModalMinuteLog;
