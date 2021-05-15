import React, { useLayoutEffect } from 'react';
import { useMinute } from 'contexts/minute';
import { useParams } from 'react-router-dom';

import MinuteFields from 'components/templates/MinuteFields';

import { Container } from './styles';

interface ParamsProps {
  id: string;
}

const Review = () => {
  const params: ParamsProps = useParams();
  const { getSingleMinute, setReviewEnable } = useMinute();

  useLayoutEffect(() => {
    getSingleMinute(params.id);
    setReviewEnable(true);
  }, [params, getSingleMinute, setReviewEnable]);

  return (
    <Container>
      <MinuteFields />
    </Container>
  );
};

export default Review;
