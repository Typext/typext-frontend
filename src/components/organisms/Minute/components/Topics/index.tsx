import React from 'react';
import { Table } from 'antd';

import { IMinute } from 'DTOs';
import { Container } from './styles';

interface TopicsProps {
  minute: IMinute | undefined;
}

const Topics = ({ minute }: TopicsProps) => {
  const topics = minute?.topic || minute?.topics;

  const columns = [
    {
      title: 'ID',
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
      <Table dataSource={topics} columns={columns} />
      <h4>
        {minute?.minute.areas.map(area => (
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
