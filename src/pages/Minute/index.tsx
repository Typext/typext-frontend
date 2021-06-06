import React, { useState } from 'react';

// eslint-disable-next-line
import MinuteViewer from 'components/organisms/MinuteViewer';

import { useMinute } from 'contexts/minute';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation';
import Topics from './components/Topics';
import Schedules from './components/Schedules';
import Areas from './components/Areas';

import OptionButtons from './components/OptionButtons';
import ScheduleModal from './components/ScheduleModal';

import { Container } from './styles';

const Main = () => {
  const { minute } = useMinute();

  const [showMinute, setShowMinute] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <>
      {showMinute && <MinuteViewer setShowMinute={setShowMinute} />}

      {showSchedule && <ScheduleModal setShowSchedule={setShowSchedule} />}

      <Container>
        <Initial minute={minute} />
        <ProjectInformation minute={minute} />
        <Topics minute={minute} />
        <Schedules minute={minute} />
        <Areas minute={minute} />
        <OptionButtons
          setShowSchedule={setShowSchedule}
          setShowMinute={setShowMinute}
        />
      </Container>
    </>
  );
};

export default Main;
