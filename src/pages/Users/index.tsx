import React from 'react';

import { Container } from './styles';

const Users = () => {
  return (
    <Container>
      <h1>Lista de Usuários</h1>

      <section className="info">
        <button type="button">Nome do usuário</button>
        <button type="button">Nível de permissão</button>
      </section>

      <section className="usersList">
        <button type="button">
          <span>Richie Sambora</span>
          <span>Comum</span>
        </button>

        <button type="button">
          <span>Slash</span>
          <span>Gerente</span>
        </button>

        <button type="button">
          <span>John Lennon</span>
          <span>Admin</span>
        </button>

        <button type="button">
          <span>Richie Sambora</span>
          <span>Comum</span>
        </button>

        <button type="button">
          <span>Slash</span>
          <span>Gerente</span>
        </button>

        <button type="button">
          <span>John Lennon</span>
          <span>Admin</span>
        </button>
      </section>
    </Container>
  );
};

export default Users;
