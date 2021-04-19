import React, { useState } from 'react';

import { useMinute } from 'contexts/minute';

import ScrollBox from 'components/ScrollBox/ScrollBox';
import Button from 'components/Button/Button';
import StyledSubjects from './styles';

import SubjectModal from './components/SubjectModal';

const Subjects = () => {
  const { subjects, setSubjects } = useMinute();

  const [openSubjectModal, setOpenSubjectModal] = useState(false);

  const handleOpenSubjectModal = () => {
    setOpenSubjectModal(!openSubjectModal);
  };

  return (
    <>
      {openSubjectModal && (
        <SubjectModal
          setOpenSubjectModal={setOpenSubjectModal}
          setSubjects={setSubjects}
          subjects={subjects}
        />
      )}

      <StyledSubjects>
        <h1>Assuntos</h1>

        <div className="subjects">
          <Button
            color="var(--soft-pink)"
            colorText="var(--red-pink)"
            onClick={handleOpenSubjectModal}
          >
            Adicionar
          </Button>

          <ScrollBox>
            <div className="content">
              <div className="titles">
                <span>Alteração</span>
                <span>Prazo</span>
                <span>Responsável</span>
              </div>

              {subjects.length > 0 ? (
                subjects.map(subject => (
                  <div className="subject">
                    <span>{subject.subject}</span>
                    <span>{subject.deadLine}</span>
                    <span>{subject.responsible}</span>
                  </div>
                ))
              ) : (
                <div className="subject">
                  <span>Assunto</span>
                  <span>XX/XX/XXX</span>
                  <span>Responsável</span>
                </div>
              )}
            </div>
          </ScrollBox>
        </div>
      </StyledSubjects>
    </>
  );
};

export default Subjects;
