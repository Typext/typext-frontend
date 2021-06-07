import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { ReactComponent as RemoveIcon } from 'assets/exit_logo_red.svg';
import ScrollBox from 'components/atoms/ScrollBox';
import Button from 'components/atoms/Button';
import { IMinute } from 'DTOs';

import { useReview } from 'contexts/review';
import StyledTopics from './styles';
import TopicModal from './components/TopicModal';

interface TopicProps {
  minute: IMinute | undefined;
}

const Topics = ({ minute }: TopicProps) => {
  const [topics, setReviewTopics] = useState(minute?.topic);

  const { setTopics } = useReview();

  const [openTopicModal, setOpenTopicModal] = useState(false);

  const handleOpenTopicModal = () => {
    setOpenTopicModal(!openTopicModal);
  };

  const handleRemoveTopic = (id: number) => {
    setTopics(topics?.filter(topic => topic.id !== id));
  };

  useEffect(() => {
    setReviewTopics(minute?.topic);
  }, [minute?.topic]);

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
                    <span>{moment(topic.deadline).format('DD/MM/YYYY')}</span>
                    <span>{topic.responsible}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTopic(topic?.id || 0)}
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                ))
              ) : (
                <div className="topic">
                  <span>Assunto</span>
                  <span>DD/MM/YYYY</span>
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
