import React from 'react';

import { Form } from '@unform/web';

import InputForm from 'components/InputForm';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import { Container } from './styles';

interface FormUpdateProps {
  handleSubmit: any;
  formRef: any;
  hasPasswordField?: boolean;
  inviteInfo: { name: string; email: string };
  user?: {
    id: string;
    type: string;
    name: string;
    email: string;
    office: string;
    area: string;
    company: string;
    phone: string;
    password: string;
  };
}

function FormUpdate({
  handleSubmit,
  formRef,
  inviteInfo,
  hasPasswordField,
  user,
}: FormUpdateProps) {
  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef} className="Content">
        <div className="inputContent">
          <InputForm
            name="name"
            title="Nome completo"
            defaultValue={inviteInfo?.name || user?.name}
          />

          <InputForm
            defaultValue={user?.office}
            name="office"
            title="Título / Cargo"
          />

          <InputForm defaultValue={user?.area} name="area" title="Área" />

          <InputForm
            defaultValue={user?.company}
            name="company"
            title="Empresa"
          />

          <Input
            name="email"
            title="E-mail"
            styleWidth="40rem"
            defaultValue={inviteInfo?.email || user?.phone || ''}
            readOnly={!!inviteInfo?.email}
          />

          <InputForm defaultValue={user?.phone} name="phone" title="Telefone" />

          {hasPasswordField && (
            <>
              <InputForm
                defaultValue={user?.password}
                name="password"
                title="Senha"
                type="password"
              />

              <InputForm
                name="password_confirmation"
                title="Confirme a senha"
                type="password"
              />
            </>
          )}
        </div>

        <Button color="var(--green)">Cadastrar</Button>
      </Form>
    </Container>
  );
}

FormUpdate.defaultProps = {
  hasPasswordField: false,
  user: {
    name: '',
    email: '',
    office: '',
    area: '',
    company: '',
    phone: '',
    password: '',
  },
};

export default FormUpdate;
