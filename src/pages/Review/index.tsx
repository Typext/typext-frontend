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
  const { getMinute, setReviewEnable } = useMinute();

  useLayoutEffect(() => {
    getMinute(params.id);
    setReviewEnable(true);
  }, [params, getMinute, setReviewEnable]);

  return (
    <Container>
      <MinuteFields />
    </Container>
  );
};

export default Review;
