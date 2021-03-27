import React, { PureComponent } from 'react';

import GeneralInfo from './components/GeneralInfo';
import MembersInfo from './components/MembersInfo';
import Subjects from './components/Subjects';
import TopicsName from './components/TopicsName';

import { Container } from './styles';

class ComponentToPrint extends PureComponent {
  render() {
    return (
      <Container>
        <GeneralInfo />

        <h2>ATA DE REUNIÃO</h2>

        <MembersInfo />
        <Subjects />
        <TopicsName />
      </Container>
    );
  }
}

export default ComponentToPrint;
