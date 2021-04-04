import React from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from 'assets/logo.svg';
import Content from './styles';

function Login() {
    return (
      <>
        <Content>

          <div className="Login">

            <a href="/#">
              <img src={Logo} alt="Logo" />
            </a>

            <div className="EmailPassword">
              <Input
                title="E-mail"
                color="black"
                Size="large"
                styleWidth="large"
              />

              <Input
                title="Senha"
                color="black"
                Size="large"
                styleWidth="large"
              />

            </div>

            <div className="LoginPassForgot">
              <Button
                color="var(--black)"
                colorText="white"
                size="23.75rem"
              >
                Login

              </Button>

              <a href="/recovery-password">
                Esqueceu a senha?
                <strong>Clique aqui.</strong>
              </a>

            </div>

          </div>

        </Content>
      </>
    );
}

export default Login;
