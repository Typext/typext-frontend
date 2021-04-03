import React, { useContext, useState } from 'react';

import { MainContext, MainProvider } from 'contexts/MainContext';

import { IMinute } from 'DTOs';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation/ProjectInformation';
import OptionButtons from './components/OptionButtons';
import Topics from './components/Topics/Topics';
import Subjects from './components/Subjects/Subjects';
import Distributions from './components/Distributions/Distributions';

// eslint-disable-next-line
import MinuteViewer from './components/MinuteViewer';
import ScheduleModal from './components/ScheduleModal';

import Container from './styles';

const Main = () => {
  const {
    topics,
    showSchedule,
    addressAndHour,
    projectInfo,
    subjects,
    distributions,
  } = useContext(MainContext);

  const [showMinute, setShowMinute] = useState(false);

  const [minute, setMinute] = useState<IMinute>();

  const handleGenerateMinute = () => {
    setMinute({
      addressAndHour,
      projectInfo,
      topics,
      subjects,
      distributions,
    });
  };

  return (
    <>
      <MainProvider>
        {showMinute && (
          <MinuteViewer setShowMinute={setShowMinute} minute={minute} />
        )}

        {showSchedule && <ScheduleModal />}

        <Container>
          <Initial />
          <ProjectInformation />

          <Topics />

          <Subjects />
          <Distributions />
          <OptionButtons
            setShowMinute={setShowMinute}
            handleGenerateMinute={handleGenerateMinute}
          />
        </Container>
      </MainProvider>
    </>
  );
};

export default Main;
