import React, { useCallback } from 'react';

import exit_icon from 'assets/exit_logo_red.svg';

import { Container, Modal } from './styles';

interface ModalProps {
  children: React.ReactNode;
  onClose?: Function;
}

const DefaultModal = ({ children, onClose }: ModalProps) => {
  const handleCloseModal = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  return (
    <Container>
      <Modal className="modal-content">
        {onClose && (
          <header>
            <button type="button" onClick={handleCloseModal}>
              <img src={exit_icon} alt="exit_icon" />
            </button>
          </header>
        )}

        {children}
      </Modal>
    </Container>
  );
};

DefaultModal.defaultProps = {
  onClose: () => {
    return '';
  },
};

export default DefaultModal;
