import React from 'react';
import { Table } from 'antd';

import { Container } from './styles';

import { IMinute } from '../../DTOs';

interface ITopicsProp {
  data: IMinute;
}

const Topics = ({ data }: ITopicsProp) => {
  const { topics, distributions } = data;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'ASSUNTO',
      dataIndex: 'topic',
    },
    {
      title: 'RESPONSÁVEL',
      dataIndex: 'responsible',
    },
    {
      title: 'PRAZO',
      dataIndex: 'deadLine',
    },
  ];

  return (
    <Container>
      <Table dataSource={topics} columns={columns} />
      <h4>
        <span>
          DISTRIBUIÇÃO:
        </span>
        {' '}
        {distributions.map(distribution => (
          <>
            <p>{distribution}</p>
            <span>,</span>
          </>
        ))}
      </h4>
    </Container>
  );
};

export default Topics;
