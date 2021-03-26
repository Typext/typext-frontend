import Button from "components/Button/Button"

import { Container } from './styles'

interface OptionButtonsProps {
  setShowMinute: Function
}

const OptionButtons: React.FC<OptionButtonsProps> = ({setShowMinute}) => {
  const handleOpenMinuteModal = () => {
    if (setShowMinute) setShowMinute(true)
  }


  return (
    <Container>
      <Button color="#CECFD0">Voltar</Button>
      <Button color="#373435">Agendar</Button>
      <Button color="var(--red-pink)" onClick={handleOpenMinuteModal}>Visualizar Ata</Button>
      <Button color="#0AAD74">Gerar Ata</Button>
    </Container>
  )
}

OptionButtons.defaultProps = {
  setShowMinute: () => {
    return ''
  }
}


export default OptionButtons;