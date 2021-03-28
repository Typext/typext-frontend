import React from 'react';

import Button from 'components/Button/Button';

import { Container } from './styles';

interface OptionButtonsProps {
  setShowSchedule: Function;
  setShowMinute: Function;
  handleGenerateMinute: Function;
}

const OptionButtons: React.FC<OptionButtonsProps> = ({
  setShowSchedule,
  setShowMinute,
  handleGenerateMinute,
}: OptionButtonsProps) => {
  const handleOpenMinuteModal = () => {
    if (handleGenerateMinute) handleGenerateMinute(true);
    if (setShowMinute) setShowMinute(true);
  };

  const handleOpenSchedule = () => {
    if (setShowSchedule) setShowSchedule(true);
  };

  return (
    <Container>
      <Button color="#CECFD0">Voltar</Button>
      <Button color="#373435" onClick={handleOpenSchedule}>
        Agendar
      </Button>
      <Button color="var(--red-pink)" onClick={handleOpenMinuteModal}>
        Visualizar Ata
      </Button>
      <Button color="#0AAD74">Gerar Ata</Button>
    </Container>
  );
};
export default OptionButtons;
