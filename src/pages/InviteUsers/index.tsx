import React from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Select from 'components/Select/Select';

import StyleInviteUsers from './styles';

function index() {
    return (
      <StyleInviteUsers>
        <h1>Convidar Participante</h1>

        <div className="EmailAndPermission">
          <Input
            title="E-mail"
            color="black"
            Size="large"
            styleWidth="41.875rem"
          />

          <Select
            title="Nível de permissão"
            color="black"
            styleWidth="41.875rem"
          >
            <option value="Admin">Administrador</option>
            <option value="Manager">Gerente</option>
            <option value="Normal">Comum</option>

          </Select>

          <Button
            color="var(--black)"
            colorText="white"
            size="23.75rem"
          >
            Convidar

          </Button>

        </div>
      </StyleInviteUsers>
    );
}

export default index;
