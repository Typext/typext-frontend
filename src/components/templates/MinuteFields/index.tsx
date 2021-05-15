import React from 'react';

import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation';
import Topics from './components/Topics';
import Schedules from './components/Schedules';
import Areas from './components/Areas';

import { Container } from './styles';

const MinuteFields = () => {
  return (
    <Container>
      <Initial />
      <ProjectInformation />
      <Topics />
      <Schedules />
      <Areas />
    </Container>
  );
};

export default MinuteFields;
