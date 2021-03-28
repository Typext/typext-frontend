import React, { useState } from 'react';

import { MainProvider } from 'contexts/MainContext';

import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation/ProjectInformation';
import OptionButtons from './components/OptionButtons';
import Topics from './components/Topics/Topics';
import Subjects from './components/Subjects/Subjects';
import Distributions from './components/Distributions/Distributions';

// eslint-disable-next-line
import MinuteViewer from './components/MinuteViewer';

import Container from './styles';

import {
  IProjectInfo,
  ISubject,
  ITopic,
} from './components/MinuteViewer/components/Minute/DTOs';

const Main = () => {
  const [showMinute, setShowMinute] = useState(false);

  const [topics, setTopics] = useState<ITopic[]>([]);
  const [projectInfo, setProjectInfo] = useState<IProjectInfo>();
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [distributions, setDistributions] = useState<string[]>([]);

  const handleGenerateMinute = () => {
    console.log(projectInfo, subjects, distributions, topics);
  };

  return (
    <>
      <MainProvider>
        {showMinute && <MinuteViewer setShowMinute={setShowMinute} />}

        <Container>
          <Initial />
          <ProjectInformation setProjectInfo={setProjectInfo} />
          <Topics setTopics={setTopics} topics={topics} />

          <Subjects setSubjects={setSubjects} />
          <Distributions
            setDistributions={setDistributions}
            distributions={distributions}
          />
          <OptionButtons
            // setShowMinute={setShowMinute}
            handleGenerateMinute={handleGenerateMinute}
          />
        </Container>
      </MainProvider>
    </>
  );
};

export default Main;
