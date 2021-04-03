import React from 'react';
import { Table } from 'antd';

import { ISubject } from 'DTOs';
import { Container } from './styles';

interface ISubjectsProp {
  subjects: Array<ISubject>;
  distributions: Array<String>;
}

const Subjects = ({ subjects, distributions }: ISubjectsProp) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'ASSUNTO',
      dataIndex: 'subject',
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
      <Table dataSource={subjects} columns={columns} />
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

export default Subjects;
