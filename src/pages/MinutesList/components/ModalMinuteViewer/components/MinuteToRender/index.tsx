/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import { IMinute } from 'DTOs';

import Minute from 'components/organisms/Minute';
import { Container } from './styles';

interface IPrintProps {
  minute: IMinute;
  title: string;
}

class ComponentToPrint extends PureComponent<IPrintProps> {
  render() {
    const { minute, title } = this.props;

    return (
      <Container>
        <Minute minute={minute} title={title} />
      </Container>
    );
  }
}

export default ComponentToPrint;
