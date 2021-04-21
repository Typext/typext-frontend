import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Form } from '@unform/web';

import InputForm from 'components/InputForm';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import { Container, SectionButton } from './styles';

interface FormUpdateProps {
  emailIsNotAllowed?: boolean;
  handleSubmit: any;
  formRef: any;
  hasPasswordField?: boolean;
  goBackEnabled?: boolean;
  buttonText?: string;
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

interface ParamsProps {
  email: string;
}
function FormUpdate({
  emailIsNotAllowed,
  handleSubmit,
  formRef,
  inviteInfo,
  hasPasswordField,
  goBackEnabled,
  buttonText,
  user,
}: FormUpdateProps) {
  const history = useHistory();
  const params = useParams<ParamsProps>();

  const paramsEmail = params.email;

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

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

          {emailIsNotAllowed ? (
            <Input
              name="email"
              title="E-mail"
              styleWidth="40rem"
              color="var(--black);"
              weight="bold"
              defaultValue={paramsEmail || user?.email || ''}
              readOnly={!!paramsEmail}
            />
          ) : (
            <InputForm
              name="email"
              title="E-mail"
              defaultValue={paramsEmail || user?.email || ''}
              readOnly={!!paramsEmail}
            />
          )}

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

        <SectionButton>
          {goBackEnabled && (
            <Button color="var(--gray)" onClick={handleGoBack}>
              Voltar
            </Button>
          )}
          <Button color="var(--green)">{buttonText || 'Cadastrar'}</Button>
        </SectionButton>
      </Form>
    </Container>
  );
}

FormUpdate.defaultProps = {
  emailIsNotAllowed: false,
  hasPasswordField: false,
  goBackEnabled: false,
  buttonText: '',
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
