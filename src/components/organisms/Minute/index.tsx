import React from 'react';

import { IMinute } from 'DTOs';
import GeneralInfo from './components/GeneralInfo';
import Project from './components/Project';
import Topics from './components/Topics';
import Schedules from './components/Schedules';

interface MinuteProps {
  minute: IMinute;
  title: string;
}

const Minute = ({ minute, title }: MinuteProps) => {
  return (
    <>
      <GeneralInfo minute={minute} />
      <h2>{title}</h2>
      <Project minute={minute} />
      <Schedules minute={minute} />
      <Topics minute={minute} />
    </>
  );
};

export default Minute;
