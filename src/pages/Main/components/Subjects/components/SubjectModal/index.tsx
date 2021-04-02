import React, { useState } from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import TextArea from 'components/TextArea/TextArea';

import { ISubject } from 'DTOs';
import { Container } from './styles';

interface ISubjectModalProps {
  setOpenSubjectModal: Function;
  setSubjects: Function;
  subjects: Array<ISubject>;
}

const SubjectModal = ({
  setOpenSubjectModal,
  setSubjects,
  subjects,
}: ISubjectModalProps) => {
  const [subject, setSubject] = useState<string>();
  const [responsible, setResponsible] = useState<string>();
  const [deadLine, setDeadLine] = useState<string>();

  const handleCloseModal = () => {
    if (setOpenSubjectModal) setOpenSubjectModal();
  };

  const handleSaveSubject = () => {
    setSubjects([...subjects, { subject, responsible, deadLine }]);
    handleCloseModal();
  };

  return (
    <Container>
      <div className="modal">
        <TextArea
          title="Assunto"
          cols={10}
          rows={10}
          divClass="textArea"
          onChange={(e: any) => setSubject(e.target.value)}
        />

        <section className="inputs">
          <Input
            title="Prazo"
            onChange={(e: any) => setDeadLine(e.target.value)}
          />
          <Input
            title="Responsável"
            onChange={(e: any) => setResponsible(e.target.value)}
          />
        </section>

        <section className="options">
          <Button color="#F60846" onClick={handleCloseModal}>
            Cancelar
          </Button>

          <Button color="#0AAD74" onClick={handleSaveSubject}>
            Salvar
          </Button>
        </section>
      </div>
    </Container>
  );
};

export default SubjectModal;
