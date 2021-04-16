import React, { createContext, useState } from 'react';

import {
  ITopic,
  IAddressAndHour,
  IProjectInfo,
  ISubject,
} from 'DTOs';

interface IMainProvider {
  children: React.ReactNode;
}

interface IMainContextData {
  topics: Array<ITopic>;
  setTopics: Function;
  showSchedule: Boolean;
  setShowSchedule: Function;
  addressAndHour: IAddressAndHour;
  setAddressAndHour: Function;
  projectInfo: IProjectInfo;
  setProjectInfo: Function;
  subjects: ISubject[];
  setSubjects: Function;
  distributions: string[];
  setDistributions: Function;
}

export const MainContext = createContext({} as IMainContextData);

export const MainProvider: React.FC<IMainProvider> = ({ children }: IMainProvider) => {
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [showSchedule, setShowSchedule] = useState(false);
  const [addressAndHour, setAddressAndHour] = useState<IAddressAndHour>({
    local: '',
    startDate: '',
    startHour: '',
  });
  const [projectInfo, setProjectInfo] = useState<IProjectInfo>({
    projectName: '',
    members: [],
  });
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [distributions, setDistributions] = useState<string[]>([]);

  return (
    <MainContext.Provider value={{
      topics,
      setTopics,
      showSchedule,
      setShowSchedule,
      addressAndHour,
      setAddressAndHour,
      projectInfo,
      setProjectInfo,
      subjects,
      setSubjects,
      distributions,
      setDistributions,
    }}
    >
      {children}
    </MainContext.Provider>
  );
};
