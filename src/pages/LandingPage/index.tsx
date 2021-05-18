/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/atoms/Button';
import Logo from 'assets/logo.svg';
import Illustration from 'assets/hero_illustration.svg';
import Register from 'assets/register.svg';
import Minute from 'assets/minute.svg';
import Manage from 'assets/manage.svg';

import { Container } from './styles';

const LandingPage = () => {
  const history = useHistory();

  const handleNavigateToHome = useCallback(() => {
    history.push('/home');
  }, [history]);

  return (
    <Container>
      <div className="content">
        <div className="head">
          <img src={Logo} alt="" />
        </div>

        <div className="hero">
          <div className="left">
            <img id="illustration" src={Illustration} alt="" />
            <h3>TODAS AS SUAS ATAS EM UM SÓ LUGAR.</h3>
          </div>
          <div className="right">
            <Button
              type="button"
              styleComponent="red"
              sizeComponent="normal"
              onClick={handleNavigateToHome}
            >
              Entrar
            </Button>
            <h1>
              <strong>Simplifique</strong> o modo de como registra suas reuniões
            </h1>
            <div className="steps">
              <div className="step">
                <img src={Register} alt="" />
                <p>Cadastre e faça login</p>
              </div>
              <div className="step">
                <img src={Minute} alt="" />
                <p>Crie suas atas</p>
              </div>
              <div className="step">
                <img src={Manage} alt="" />
                <p>Gerencie de modo fácil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
