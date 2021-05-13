/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';

import { ITopic, IDate, IParticipant, IMinute } from 'DTOs/Minute';

interface IMinuteProvider {
  children: React.ReactNode;
}

interface IMinuteContextData {
  handleSetTopics: (topic: Omit<ITopic, 'id'>) => void;
  handleSetParticipants: (participant: IParticipant) => void;
  handleSetSchedules: (schedule: string) => void;
  handleSetAreas: (area: string) => void;
  setDate: (date: IDate) => void;
  setParticipants: Function;
  setSchedules: Function;
  setAreas: Function;
  setProject: Function;
  setPlace: Function;
  minute: IMinute;
}

export const MinuteContext = createContext({} as IMinuteContextData);

const MinuteProvider: React.FC<IMinuteProvider> = ({
  children,
}: IMinuteProvider) => {
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [date, setDate] = useState<IDate>({} as IDate);
  const [schedules, setSchedules] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [project, setProject] = useState<string>('');
  const [place, setPlace] = useState<string>('');

  const minute: IMinute = {
    minute: {
      ...date,
      minute_number: '1',
      place,
      project,
      schedules,
      areas,
    },
    participant: participants,
    topic: topics,
  };

  const handleSetTopics = useCallback(
    newTopic => {
      if (newTopic) {
        setTopics([...topics, { ...newTopic, id: topics.length + 1 }]);
      }
    },
    [topics],
  );

  const handleSetParticipants = useCallback(
    participant => {
      if (participant) setParticipants([...participants, participant]);
    },
    [participants],
  );

  const handleSetAreas = useCallback(
    area => {
      if (area) setAreas([...areas, area]);
    },
    [areas],
  );

  const handleSetSchedules = useCallback(
    schedule => {
      if (schedule) setSchedules([...schedules, schedule]);
    },
    [schedules],
  );

  return (
    <MinuteContext.Provider
      value={{
        handleSetTopics,
        handleSetParticipants,
        handleSetSchedules,
        handleSetAreas,
        setParticipants,
        setSchedules,
        setProject,
        setAreas,
        setPlace,
        setDate,
        minute,
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
