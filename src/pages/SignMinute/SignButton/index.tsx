import React from 'react';
import { notification } from 'antd';
import { useParams } from 'react-router-dom';

import { ReactComponent as SignMinuteIcon } from 'assets/signMinuteIcon.svg';

import Button from 'components/atoms/Button';
import api from 'services/api';
import { Container, Description } from './styles';

interface ParamsProps {
  minute_id: string;
  user_email: string;
}

const SignButton = () => {
  const params: ParamsProps = useParams();

  const signMinuteRequest = async () => {
    try {
      await api.post('/sign-minute/', {
        minute_id: params.minute_id,
        participant_email: params.user_email,
      });

      notification.success({
        message: 'Sucesso',
        description: 'Sua ata foi assinada com sucesso',
      });
    } catch (err) {
      const errorData = err.response?.data;
      const celebrateError = errorData?.validation?.body?.message;

      notification.error({
        message: 'Falha ao assinar ata',
        description: celebrateError || errorData?.message,
      });
    }
  };

  return (
    <Container>
      <SignMinuteIcon />
      <Description>
        Ao assinar a ata você concorda com todos termos acordados neste
        documento.
      </Description>
      <Button
        type="button"
        styleComponent="green"
        sizeComponent="normal"
        onClick={signMinuteRequest}
      >
        Assinar
      </Button>
    </Container>
  );
};

export default SignButton;
