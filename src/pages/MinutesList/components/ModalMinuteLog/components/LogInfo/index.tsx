import React from 'react';
import moment from 'moment';

import { Container } from './styles';

interface ILogInfo {
  modification: string;
  date: string;
  modifiedBy: string;
}

const LogInfo: React.FC<ILogInfo> = ({
  modification,
  date,
  modifiedBy,
}: ILogInfo) => {
  return (
    <Container>
      <div className="modification">
        <strong>{modification}</strong>
      </div>

      <div className="date">
        <strong>{date}</strong>
      </div>

      <div className="modified-by">
        <strong>{moment(modifiedBy).format('DD/MM/YYYY')}</strong>
      </div>
    </Container>
  );
};

export default LogInfo;
