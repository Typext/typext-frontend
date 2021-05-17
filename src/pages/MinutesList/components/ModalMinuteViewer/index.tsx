import React, { useContext, useState } from 'react';

import exitIcon from 'assets/exit_logo_red.svg';

import Minute from 'components/organisms/Minute';
import { Container, Modal } from './styles';

interface IModalMinuteViewer {
  children: React.ReactNode;
  onClose: Function;
}

const ModalMinuteViewer: React.FC<IModalMinuteViewer> = ({
  children,
  onClose,
}: IModalMinuteViewer) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Container>
      <Modal modalIsOpen={}>
        <header>
          <button type="button" onClick={}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </header>

        <div className="content">
          <Minute />
        </div>

        <div className="buttons" />
      </Modal>
    </Container>
  );
};

export default ModalMinuteViewer;
