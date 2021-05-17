import React from 'react';
import { Table } from 'antd';

import { useMinute } from 'contexts/minute';

import { Container } from './styles';

const Topics = () => {
  const { minute } = useMinute();

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
      <Table dataSource={minute.topic} columns={columns} />
      <h4>
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
