import React from 'react';
import { Table } from 'antd';

import { IMinute } from 'DTOs';
import { Container } from './styles';

interface TopicsProps {
  minute: IMinute;
}

const Topics = ({ minute }: TopicsProps) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'ASSUNTO',
      dataIndex: 'name',
    },
    {
      title: 'RESPONSÁVEL',
      dataIndex: 'responsible',
    },
    {
      title: 'PRAZO',
      dataIndex: 'deadline',
    },
  ];

  return (
    <Container>
      <Table dataSource={minute?.topic} columns={columns} />
      <h4>
        <span>DISTRIBUIÇÃO:</span>
        {' '}
        {minute.minute.areas.map(area => (
          <>
            <p>{area}</p>
            <span>,</span>
          </>
        ))}
      </h4>
    </Container>
  );
};

export default Topics;
