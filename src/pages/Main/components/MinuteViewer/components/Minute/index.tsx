/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import GeneralInfo from './components/GeneralInfo';
import Project from './components/Project';
import Topics from './components/Topics';
import Subjects from './components/Subjects';

import { minuteData } from '../../data.js';

import { Container } from './styles';

import { IMinute } from './DTOs';

interface IPrintProps {
  data: IMinute;
}

class ComponentToPrint extends PureComponent<IPrintProps> {
  render() {
    return (
      <Container>
        <GeneralInfo addressAndHour={minuteData.addressAndHour} />

        <h2>ATA DE REUNIÃO</h2>

        <Project projectInfo={minuteData.projectInfo} />
        <Topics topics={minuteData.topics} />
        <Subjects subjects={minuteData.subjects} distributions={minuteData.distributions} />
      </Container>
    );
  }
}

export default ComponentToPrint;
