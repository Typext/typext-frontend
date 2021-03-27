import React, { useState } from 'react';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation/ProjectInformation';
import OptionButtons from './components/OptionButtons';
import Topics from './components/Topics/Topics';
import Subjects from './components/Subjects/Subjects';
import Distributions from './components/Distributions/Distributions';

//eslint-disabled-next-line
import MinuteViewer from './components/MinuteViewer';

import Container from './styles';

const Main = () => {
  const [showMinute, setShowMinute] = useState(false);

  return (
    <>
      {showMinute && <MinuteViewer setShowMinute={setShowMinute} />}

      <Container>
        <Initial />
        <ProjectInformation />
        <Topics />

        <Subjects />
        <Distributions />
        <OptionButtons setShowMinute={setShowMinute} />
      </Container>
    </>
  );
};

export default Main;
