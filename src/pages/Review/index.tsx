import React, { useLayoutEffect } from 'react';
import { useMinute } from 'contexts/minute';
import { useParams } from 'react-router-dom';

import Initial from 'components/organisms/Initial/Initial';
import ProjectInformation from 'components/organisms/ProjectInformation';
import Topics from 'components/organisms/Topics';
import Schedules from 'components/organisms/Schedules';
import Areas from 'components/organisms/Areas';
import { Container } from './styles';

interface ParamsProps {
  id: string;
}

const Review = () => {
  const params: ParamsProps = useParams();
  const { minuteForReview, getSingleMinute, setReviewEnable } = useMinute();

  useLayoutEffect(() => {
    getSingleMinute(params.id);
    setReviewEnable(true);
  }, [params, getSingleMinute, setReviewEnable]);

  return (
    <Container>
      <Initial minute={minuteForReview} />
      <ProjectInformation minute={minuteForReview} />
      <Topics minute={minuteForReview} />
      <Schedules minute={minuteForReview} />
      <Areas minute={minuteForReview} />
    </Container>
  );
};

export default Review;
