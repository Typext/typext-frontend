/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import { IMinute } from 'DTOs';

import GeneralInfo from './components/GeneralInfo';
import Project from './components/Project';
import Topics from './components/Topics';
import Subjects from './components/Subjects';

import { Container } from './styles';

interface IPrintProps {
  minute: IMinute;
}

class ComponentToPrint extends PureComponent<IPrintProps> {
  render() {
    const { minute } = this.props;

    return (
      <Container>
        <GeneralInfo addressAndHour={minute.addressAndHour} />

        <h2>ATA DE REUNIÃO</h2>

        <Project projectInfo={minute.projectInfo} />
        <Topics topics={minute.topics} />
        <Subjects
          subjects={minute.subjects}
          distributions={minute.distributions}
        />
      </Container>
    );
  }
}

export default ComponentToPrint;
