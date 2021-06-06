import React from 'react';

import filterIcon from 'assets/filter.svg';

import { Container } from './styles';

const ListHeader: React.FC = () => {
  return (
    <Container>
      <button className="title" type="button">
        <div className="spacing" />
        Título
        <img src={filterIcon} alt="title filter" />
      </button>

      <button className="date" type="button">
        <div className="spacing" />
        Data
        <img src={filterIcon} alt="date filter" />
      </button>

      <button className="status" type="button">
        <div className="spacing" />
        Status
        <img src={filterIcon} alt="status filter" />
      </button>

      <button className="schedule" type="button">
        <div className="spacing" />
        Pauta
        <img src={filterIcon} alt="schedule filter" />
      </button>
    </Container>
  );
};

export default ListHeader;
