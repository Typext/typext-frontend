import React, { useState } from 'react';

// eslint-disable-next-line
import MinuteViewer from 'components/organisms/MinuteViewer';

import Initial from 'components/organisms/Initial/Initial';
import ProjectInformation from 'components/organisms/ProjectInformation';
import Topics from 'components/organisms/Topics';
import Schedules from 'components/organisms/Schedules';
import Areas from 'components/organisms/Areas';
import { useMinute } from 'contexts/minute';
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
