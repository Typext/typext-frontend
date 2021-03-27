import React, { useState } from 'react';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation/ProjectInformation';
import OptionButtons from './components/OptionButtons';
<<<<<<< HEAD
import Topics from './components/Topics/Topics';
=======
import Subjects from './components/Subjects/Subjects';
import Distributions from './components/Distributions/Distributions';
import MinuteViewer from './components/MinuteViewer';
>>>>>>> 41e3279a1ceed5e8baf2d6d863515f8bd5ca281f

import Container from './styles';

const Main = () => {
  const [showMinute, setShowMinute] = useState(false);

  return (
    <>
      {showMinute && <MinuteViewer setShowMinute={setShowMinute} />}

      <Container>
        <Initial />
        <ProjectInformation />
<<<<<<< HEAD
        <Topics />

=======
        <Subjects />
        <Distributions />
>>>>>>> 41e3279a1ceed5e8baf2d6d863515f8bd5ca281f
        <OptionButtons setShowMinute={setShowMinute} />
      </Container>
    </>
  );
};

export default Main;
