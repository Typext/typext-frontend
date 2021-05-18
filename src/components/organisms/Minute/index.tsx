import React from 'react';

import { IMinute } from 'DTOs';
import GeneralInfo from './components/GeneralInfo';
import Project from './components/Project';
import Topics from './components/Topics';
import Schedules from './components/Schedules';

import { Title } from './styles';

interface MinuteProps {
  minute: IMinute | undefined;
  title: string | undefined;
}

const Minute = ({ minute, title }: MinuteProps) => {
  return (
    <>
      <GeneralInfo minute={minute} />
      <Title>{title}</Title>
      <Project minute={minute} />
      <Schedules minute={minute} />
      <Topics minute={minute} />
    </>
  );
};

export default Minute;
