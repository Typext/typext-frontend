import React, { useState } from 'react';

import ScrollBox from 'components/atoms/ScrollBox';
import Button from 'components/atoms/Button';
import { IMinute } from 'DTOs';
import StyledTopics from './styles';

import TopicModal from './components/TopicModal';

interface TopicProps {
  minute: IMinute | undefined;
}

const Topics = ({ minute }: TopicProps) => {
  const topics = minute?.topic;

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
          <div className="btn">
            <Button
              type="button"
              styleComponent="add"
              sizeComponent="normal"
              onClick={handleOpenTopicModal}
            >
              Adicionar
            </Button>
          </div>

          <ScrollBox>
            <div className="content">
              <div className="titles">
                <span>Alteração</span>
                <span>Prazo</span>
                <span>Responsável</span>
              </div>

              {topics && topics?.length > 0 ? (
                topics?.map(topic => (
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
