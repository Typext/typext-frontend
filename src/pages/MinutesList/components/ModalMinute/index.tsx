import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import DefaultModal from 'components/organisms/DefaultModal';

import iacitIcon from 'assets/iacit.svg';

import Button from 'components/atoms/Button';
import { Container } from './styles';

interface IModalMinute {
  handleOpenMinuteViewer: () => void;
  onClose: Function;
  id: string | undefined;
  title: string | undefined;
  date: string | undefined;
  status: string | undefined;
}

const ModalMinute: React.FC<IModalMinute> = ({
  handleOpenMinuteViewer,
  onClose,
  id,
  title,
  date,
  status,
}: IModalMinute) => {
  const history = useHistory();

  const handleNavigateToMinuteReview = useCallback(() => {
    history.push(`/review/${id}`);
  }, [history, id]);

  return (
    <Container>
      <DefaultModal onClose={onClose}>
        <div className="content">
          <img src={iacitIcon} alt="" />
          <h3>{title}</h3>
          <strong>{date}</strong>
          <strong>{status}</strong>

          <div className="buttons">
            <Button type="button" sizeComponent="normal" styleComponent="gray">
              Log
            </Button>

            <Button
              type="button"
              sizeComponent="normal"
              styleComponent="black"
              onClick={handleNavigateToMinuteReview}
            >
              Revisar
            </Button>

            <Button
              type="button"
              sizeComponent="normal"
              styleComponent="green"
              onClick={handleOpenMinuteViewer}
            >
              Visualizar
            </Button>
          </div>
        </div>
      </DefaultModal>
    </Container>
  );
};

export default ModalMinute;
