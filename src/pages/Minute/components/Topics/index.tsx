import React, { useState } from 'react';

import { useMinute } from 'contexts/minute';

import ScrollBox from 'components/ScrollBox/ScrollBox';
import Button from 'components/Button/Button';
import StyledTopics from './styles';

import TopicModal from './components/TopicModal';

const Topics = () => {
  const { minute } = useMinute();

  const [openTopicModal, setOpenTopicModal] = useState(false);

  const handleOpenTopicModal = () => {
    setOpenTopicModal(!openTopicModal);
  };

  return (
    <>
      {openTopicModal && <TopicModal onClose={setOpenTopicModal} />}

      <StyledTopics>
        <h1>Assuntos</h1>

        <div className="topics">
          <Button
            color="var(--soft-pink)"
            colorText="var(--red-pink)"
            onClick={handleOpenTopicModal}
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

              {minute.topic.length > 0 ? (
                minute.topic.map(topic => (
                  <div className="topic">
                    <span>{topic.name}</span>
                    <span>{topic.deadline}</span>
                    <span>{topic.responsible}</span>
                  </div>
                ))
              ) : (
                <div className="topic">
                  <span>Assunto</span>
                  <span>XX/XX/XXX</span>
                  <span>Responsável</span>
                </div>
              )}
            </div>
          </ScrollBox>
        </div>
      </StyledTopics>
    </>
  );
};

export default Topics;
