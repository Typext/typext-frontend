import React from 'react';

import TextArea from 'components/TextArea/TextArea';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import AddIcon from 'assets/add_icon.svg';

import StyledSubjects from './styles';

const Subjects = () => {
  return (
    <StyledSubjects>

      <h1>Assuntos</h1>

      <div className="Subjects">

        <h3>Assunto 01</h3>

        <div className="Text">

          <TextArea
            title="SubjectText"
            cols={50}
            rows={4}
          />

          <Button color="var(--red-pink)">Remover</Button>
        </div>

        <div className="Attributes">
          <Input
            title="Responsável"
            color="black"
            Size="large"
            styleWidth="medium"
          />

          <Input
            title="Prazo"
            color="black"
            Size="large"
            styleWidth="medium"
          />

          <Button
            color="var(--soft-pink)"
            colorText="var(--red-pink)"
            size="23.75rem"
          >
            Adicionar
            <img src={AddIcon} alt="Add" />

          </Button>
        </div>

      </div>

    </StyledSubjects>
  );
};

export default Subjects;
