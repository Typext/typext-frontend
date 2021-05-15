import React, { useCallback, useState, useRef } from 'react';
import { FormHandles } from '@unform/core';

import Button from 'components/atoms/Button';
import InputForm from 'components/atoms/InputForm';
import TextArea from 'components/atoms/TextArea';

import { useMinute } from 'contexts/minute';
import { ITopic } from 'DTOs/Minute';
import getValidationErrors from 'utils/getValidationErrors';

import { schema } from './validation';
import { Container, Form } from './styles';

interface ITopicModalProps {
  onClose: Function;
}

const TopicModal = ({ onClose }: ITopicModalProps) => {
  const { handleSetTopics } = useMinute();

  const [name, setName] = useState<string>('');

  const formRef = useRef<FormHandles>(null);

  const handleTextareaChange = useCallback((e: any) => {
    setName(e.target.value);
  }, []);

  const handleCloseModal = useCallback(() => {
    if (onClose) onClose(false);
  }, [onClose]);

  const handleAddTopic = useCallback(
    async (data: Omit<ITopic, 'id'>) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate({ ...data, name }, { abortEarly: false });

        handleSetTopics({ ...data, name });
        handleCloseModal();
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [handleSetTopics, handleCloseModal, name],
  );

  return (
    <Container>
      <div className="modal">
        <h1>Descrição do Assunto</h1>

        <Form ref={formRef} onSubmit={handleAddTopic}>
          <TextArea
            title="Assunto"
            divClass="textarea"
            name="name"
            cols={10}
            rows={10}
            onChange={handleTextareaChange}
          />

          <div className="inputsAndOptions">
            <section className="inputs">
              <InputForm title="Prazo" name="deadline" />
              <InputForm title="Responsável" name="responsible" />
            </section>

            <section className="options">
              <Button
                styleComponent="red"
                sizeComponent="normal"
                onClick={handleCloseModal}
              >
                Cancelar
              </Button>

              <Button
                styleComponent="green"
                sizeComponent="normal"
                type="submit"
              >
                Salvar
              </Button>
            </section>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default TopicModal;
