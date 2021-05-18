import React, { useLayoutEffect } from 'react';

import Logo from 'components/atoms/Logo';

import Minute from 'components/organisms/Minute';
import { useMinute } from 'contexts/minute';
import { useParams } from 'react-router-dom';

import Participants from './Participants';
import SignButton from './SignButton';
import { Container, MinuteSection } from './styles';

interface ParamsProps {
  minute_id: string;
  user_email: string;
}

const SignMinute = () => {
  const params: ParamsProps = useParams();
  const { minuteForReview, getSingleMinute } = useMinute();

  useLayoutEffect(() => {
    const getMinute = async () => {
      await getSingleMinute(params.minute_id);
    };

    getMinute();
  }, [params, getSingleMinute]);

  return (
    <Container>
      <Logo />

      <MinuteSection>
        <Minute minute={minuteForReview} title="ATA DE REUNIÃO" />
      </MinuteSection>

      {false && <Participants />}

      <SignButton />
    </Container>
  );
};

export default SignMinute;
