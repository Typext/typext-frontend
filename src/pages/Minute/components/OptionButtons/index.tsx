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
        <Button color="#CECFD0">Voltar</Button>
        <Button color="#373435" onClick={handleOpenSchedule}>
          Agendar
        </Button>
        <Button color="var(--red-pink)" onClick={handleOpenMinuteModal}>
          Visualizar Ata
        </Button>
        {isNotProduction && (
          <Button color="#0AAD74" onClick={handleCreateMinute}>
            Gerar Ata
          </Button>
        )}
      </div>
    </Container>
  );
};
export default OptionButtons;
