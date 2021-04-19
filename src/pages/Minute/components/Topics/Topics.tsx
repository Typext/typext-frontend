/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { message } from 'antd';

import { useMinute } from 'contexts/minute';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import ScrollBox from 'components/ScrollBox/ScrollBox';

import { ITopic } from 'DTOs';

import addIcon from '../../../../assets/add_icon.svg';

import StyledTopics from './styles';

const Topics = () => {
  const { topics, setTopics } = useMinute();

  const [topicName, setTopicName] = useState<string>('');

  const handleCleanFields = () => {
    setTopicName('');
  };

  const handleInsertTopic = () => {
    if (!topicName) {
      message.error('Todas os campos devem estar preenchidos');
    } else {
      setTopics([
        ...topics,
        {
          topic: topicName,
        },
      ]);

      handleCleanFields();
    }
  };

  const deleteTopics = (topicValue: ITopic) => {
    setTopics(topics.filter(topic => topic !== topicValue));
  };

  return (
    <StyledTopics>
      <h1>Pauta</h1>

      <div className="Topic">
        <div className="AddTopic">
          <Input
            title="Pauta"
            styleWidth="100%"
            value={topicName}
            onChange={(e: any) => setTopicName(e.target.value)}
          />

          <Button
            color="var(--soft-pink)"
            colorText="var(--red-pink)"
            size="23.75rem"
            onClick={handleInsertTopic}
          >
            Adicionar
            <img src={addIcon} alt="" />
          </Button>
        </div>

        <div className="TopicList">
          <h3>Pautas adicionadas:</h3>
          <ScrollBox>
            {topics?.map(topic => (
              <BoxInformation
                key={topic.topic}
                deleteComponent={() => deleteTopics(topic)}
              >
                <h4>{topic.topic}</h4>
              </BoxInformation>
            ))}
          </ScrollBox>
        </div>
      </div>
    </StyledTopics>
  );
};

export default Topics;
