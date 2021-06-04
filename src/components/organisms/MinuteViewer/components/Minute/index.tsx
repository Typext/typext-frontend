/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import { IMinute } from 'DTOs';

import Minute from 'components/organisms/Minute';
import { Container } from './styles';

interface IPrintProps {
  minute: IMinute;
}

class ComponentToPrint extends PureComponent<IPrintProps> {
  render() {
    const { minute } = this.props;

    return (
      <Container>
        <Minute minute={minute} title="ATA DE REUNIÂO" />
      </Container>
    );
  }
}

export default ComponentToPrint;
