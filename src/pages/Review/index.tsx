import React, { useEffect, useLayoutEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useReview } from 'contexts/review';
import { useMinute } from 'contexts/minute';

import Button from 'components/atoms/Button';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation';
import Topics from './components/Topics';
import Schedules from './components/Schedules';
import Areas from './components/Areas';
import { Container } from './styles';

interface ParamsProps {
  id: string;
}

const Review = () => {
  const params: ParamsProps = useParams();
  const history = useHistory();

  const {
    minute,
    setTopics,
    setParticipants,
    setSchedules,
    setAreas,
    setProject,
    setPlace,
    setDate,
    handleUpdateMinute,
  } = useReview();

  const { getSingleMinute, minuteForReview } = useMinute();

  useLayoutEffect(() => {
    getSingleMinute(params.id);
  }, [params, getSingleMinute]);

  useEffect(() => {
    if (setDate) {
      setDate({
        start_date: minuteForReview?.minute?.start_date || '',
        start: { hour: '', date: minuteForReview?.minute.start_date || '' },
      });
    }
    if (setTopics) setTopics(minuteForReview?.topics);
    if (setParticipants) setParticipants(minuteForReview?.participants);
    if (setSchedules) setSchedules(minuteForReview?.minute.schedules);
    if (setAreas) setAreas(minuteForReview?.minute.areas);
    if (setProject) setProject(minuteForReview?.minute.project);
    if (setPlace) setPlace(minuteForReview?.minute.place);
  }, [
    minuteForReview,
    setTopics,
    setParticipants,
    setSchedules,
    setAreas,
    setProject,
    setPlace,
    setDate,
  ]);

  const handleCallUpdateMinute = () => {
    const isSuccess = handleUpdateMinute(params.id);

    if (isSuccess) history.push('/home');
  };

  return (
    <Container>
      <Initial minute={minute} />
      <ProjectInformation minute={minute} />
      <Topics minute={minute} />
      <Schedules minute={minute} />
      <Areas minute={minute} />
      <section className="updateMinute">
        <Button
          type="button"
          styleComponent="green"
          sizeComponent="large"
          onClick={handleCallUpdateMinute}
        >
          Atualizar
          {' '}
          {minuteForReview?.minute.status === 'agendado' && 'agendamento'}
        </Button>

        {minuteForReview?.minute.status === 'agendado' && (
          <Button
            type="button"
            styleComponent="black"
            sizeComponent="large"
            onClick={handleCallUpdateMinute}
          >
            Finalizar ata
          </Button>
        )}
      </section>
    </Container>
  );
};

export default Review;
