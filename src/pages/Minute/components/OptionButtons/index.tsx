import React, { useCallback } from 'react';

import { useMinute } from 'contexts/minute';
import Button from 'components/atoms/Button';
import { getMode } from 'services/api';

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
  const isNotProduction = getMode();

  const handleOpenMinuteModal = useCallback(() => {
    if (setShowMinute) setShowMinute(true);
  }, [setShowMinute]);

  const handleOpenSchedule = useCallback(() => {
    if (setShowSchedule) setShowSchedule(true);
  }, [setShowSchedule]);

  const handleCreateMinute = useCallback(() => {
    createMinute();
  }, [createMinute]);

  return (
    <Container>
      <div className="buttons">
        <Button styleComponent="gray" sizeComponent="normal">
          Voltar
        </Button>
        <Button
          styleComponent="black"
          sizeComponent="normal"
          onClick={handleOpenSchedule}
        >
          Agendar
        </Button>
        <Button
          styleComponent="red"
          sizeComponent="normal"
          onClick={handleOpenMinuteModal}
        >
          Visualizar Ata
        </Button>
        {isNotProduction && (
          <Button
            styleComponent="green"
            sizeComponent="normal"
            onClick={handleCreateMinute}
          >
            Gerar Ata
          </Button>
        )}
      </div>
    </Container>
  );
};
export default OptionButtons;
