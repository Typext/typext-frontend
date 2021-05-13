/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import { IMinute } from 'DTOs';

import GeneralInfo from './components/GeneralInfo';
import Project from './components/Project';
import Topics from './components/Topics';
import Schedules from './components/Schedules';

import { Container } from './styles';

interface IPrintProps {
  minute: IMinute;
}

class ComponentToPrint extends PureComponent<IPrintProps> {
  render() {
    return (
      <Container>
        <GeneralInfo />

        <h2>ATA DE REUNIÃO</h2>

        <Project />
        <Schedules />
        <Topics />
      </Container>
    );
  }
}

export default ComponentToPrint;
