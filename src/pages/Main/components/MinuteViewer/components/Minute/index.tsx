/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import GeneralInfo from './components/GeneralInfo';
import Project from './components/Project';
import Subjects from './components/Subjects';
import TopicsName from './components/TopicsName';

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
        <Subjects data={minuteData} />
        <TopicsName data={minuteData} />
      </Container>
    );
  }
}

export default ComponentToPrint;
