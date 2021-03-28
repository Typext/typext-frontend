/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { message } from 'antd';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import addIcon from '../../../../assets/add_icon.svg';

import StyledTopics from './styles';

import { ITopic } from '../MinuteViewer/components/Minute/DTOs';

interface ITopicsProps {
  setTopics: Function;
  topics: Array<ITopic>;
}

const Topics = ({ setTopics, topics }: ITopicsProps) => {
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

  return (
    <StyledTopics>
      <h1>Pauta</h1>

      <div className="Topic">
        <div className="AddTopic">
          <Input
            title="Pauta"
            Size="large"
            color="black"
            styleWidth="large"
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
          <ScrollBox>
            {topics?.map(topic => (
              <BoxInformation key={topic.topic}>
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
