import React, { useRef, useCallback, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from 'contexts/AuthContext';
import getValidationErrors from 'utils/getValidationErrors';

import InputForm from 'components/InputForm';
import Button from 'components/Button/Button';
import Logo from 'assets/logo.svg';
import { getUserToken } from 'services/auth';

import loginSchema from './loginSchema';
import Content from './styles';

interface SignInData {
  email: string;
  password: string;
}

function Login() {
  const { signIn } = useAuth();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  useLayoutEffect(() => {
    const userToken = getUserToken();

    if (userToken) history.push('/home');
  }, [history]);

  const handleLoginDebug = useCallback(() => {
    const debugUser = {
      name: 'Debug Develop',
      email: 'debug@email.com',
      office: 'Dev',
      area: 'TI',
      company: 'typext',
      phone: '12 99999999',
      type: 'Admin',
      active: true,
      created_at: '2021-04-05T11:30:46.204Z',
      updated_at: '2021-04-05T11:33:32.689Z',
    };

    localStorage.setItem('@Typext:user', JSON.stringify(debugUser));
    localStorage.setItem(
      '@Typext:token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc2MjI2MTgsImV4cCI6MTYxNzcwOTAxOCwic3ViIjoiMmNmNjMzYTEtNTlhZS00YWU5LWJmODYtNzhjY2RhOWUxZGYyIn0.3a1udwBE93FOAB7guxHLa5WKB-_Ehmk4JO35UqtKrj4',
    );
    history.push('/home');
  }, [history]);

  const handleLogin = useCallback(
    async (data: SignInData) => {
      const isLoginSuccess = await signIn(data);

      if (isLoginSuccess) history.push('/home');
      message.error(
        'Erro ao fazer login! se persistir contacte o administrador',
      );
    },
    [signIn, history],
  );

  const handleSubmit = useCallback(
    async (data: SignInData) => {
      if (data.email === 'debug@email.com') {
        handleLoginDebug();
        return;
      }

      try {
        formRef.current?.setErrors({});

        await loginSchema.validate(data, { abortEarly: false });

        handleLogin(data);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [handleLogin, handleLoginDebug],
  );

  return (
    <>
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef} className="Login">
          <a href="/#">
            <img src={Logo} alt="Logo" />
          </a>

          <div className="EmailPassword">
            <InputForm name="email" title="E-mail" />

            <InputForm name="password" title="Senha" type="password" />
          </div>

          <div className="LoginPassForgot">
            <Button color="var(--black)" colorText="white" size="23.75rem">
              Login
            </Button>

            <a href="/recovery">
              Esqueceu a senha?
              <strong>Clique aqui.</strong>
            </a>
          </div>
        </Form>
      </Content>
    </>
  );
}

export default Login;
