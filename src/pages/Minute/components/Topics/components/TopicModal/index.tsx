import React, { useCallback, useState } from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import TextArea from 'components/TextArea/TextArea';

import { useMinute } from 'contexts/minute';

import { Container } from './styles';

interface ITopicModalProps {
  onClose: Function;
}

const TopicModal = ({ onClose }: ITopicModalProps) => {
  const { handleSetTopics } = useMinute();

  const [name, setName] = useState('');
  const [responsible, setResponsible] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleCloseModal = useCallback(() => {
    if (onClose) onClose(false);
  }, [onClose]);

  const handleAddTopic = useCallback(() => {
    if (handleSetTopics) handleSetTopics({ name, responsible, deadline });

    setName('');
    setDeadline('');
    setResponsible('');

    handleCloseModal();
  }, [name, responsible, deadline, handleSetTopics, handleCloseModal]);

  return (
    <Container>
      <div className="modal">
        <h1>Descrição do Assunto</h1>

        <TextArea
          title="Assunto"
          cols={10}
          rows={10}
          divClass="textArea"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />

        <div className="Complements">
          <section className="inputs">
            <Input
              title="Prazo"
              value={deadline}
              onChange={(e: any) => setDeadline(e.target.value)}
            />
            <Input
              title="Responsável"
              value={responsible}
              onChange={(e: any) => setResponsible(e.target.value)}
            />
          </section>

          <section className="options">
            <Button color="#F60846" onClick={handleCloseModal}>
              Cancelar
            </Button>

            <Button color="#0AAD74" onClick={handleAddTopic}>
              Salvar
            </Button>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default TopicModal;
