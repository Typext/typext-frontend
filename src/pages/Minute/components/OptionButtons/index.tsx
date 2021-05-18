import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useMinute } from 'contexts/minute';
import Button from 'components/atoms/Button';

import { Container } from './styles';

interface OptionButtonsProps {
  setShowMinute: Function;
  setShowSchedule: Function;
}

const OptionButtons: React.FC<OptionButtonsProps> = ({
  setShowMinute,
  setShowSchedule,
}: OptionButtonsProps) => {
  const { createMinute } = useMinute();

  const handleOpenMinuteModal = useCallback(() => {
    if (setShowMinute) setShowMinute(true);
  }, [setShowMinute]);

  const handleOpenSchedule = useCallback(() => {
    if (setShowSchedule) setShowSchedule(true);
  }, [setShowSchedule]);

  const handleCreateMinute = useCallback(() => {
    createMinute();
  }, [createMinute]);

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <div className="buttons">
        <Button
          type="button"
          styleComponent="gray"
          sizeComponent="normal"
          onClick={handleGoBack}
        >
          Voltar
        </Button>
        <Button
          type="button"
          styleComponent="black"
          sizeComponent="normal"
          onClick={handleOpenSchedule}
        >
          Agendar
        </Button>
        <Button
          type="button"
          styleComponent="red"
          sizeComponent="normal"
          onClick={handleOpenMinuteModal}
        >
          Visualizar Ata
        </Button>
        <Button
          type="button"
          styleComponent="green"
          sizeComponent="normal"
          onClick={handleCreateMinute}
        >
          Gerar Ata
        </Button>
      </div>
    </Container>
  );
};
export default OptionButtons;
