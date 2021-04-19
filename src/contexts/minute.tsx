import React, { createContext, useContext, useState } from 'react';

import { ITopic, IAddressAndHour, IProjectInfo, ISubject } from 'DTOs';

interface IMinuteProvider {
  children: React.ReactNode;
}

interface IMinuteContextData {
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

export const MinuteContext = createContext({} as IMinuteContextData);

const MinuteProvider: React.FC<IMinuteProvider> = ({
  children,
}: IMinuteProvider) => {
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
    <MinuteContext.Provider
      value={{
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
    </MinuteContext.Provider>
  );
};

function useMinute(): IMinuteContextData {
  const context = useContext(MinuteContext);

  if (!context) {
    throw new Error('useUsers must be used within an UsersProvider');
  }

  return context;
}

export { MinuteProvider, useMinute };
