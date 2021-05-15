/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';
import moment from 'moment';
import { notification } from 'antd';

import api from 'services/api';

import { ITopic, IDateState, IParticipant, IMinute } from 'DTOs/Minute';

interface IMinuteProvider {
  children: React.ReactNode;
}

interface IMinuteContextData {
  handleSetTopics: (topic: Omit<ITopic, 'id'>) => void;
  handleSetParticipants: (participant: IParticipant) => void;
  handleSetSchedules: (schedule: string) => void;
  handleSetAreas: (area: string) => void;
  setDate: (date: IDateState) => void;
  createMinute: () => void;
  setParticipants: Function;
  setSchedules: Function;
  setAreas: Function;
  setProject: Function;
  setPlace: Function;
  date: IDateState;
  minute: IMinute;
  generatedMinute: any;
}

export const MinuteContext = createContext({} as IMinuteContextData);

const MinuteProvider: React.FC<IMinuteProvider> = ({
  children,
}: IMinuteProvider) => {
  const [generatedMinute, setGeneratedMinute] = useState<IMinute>();
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [date, setDate] = useState<IDateState>({} as IDateState);
  const [schedules, setSchedules] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [project, setProject] = useState<string>('');
  const [place, setPlace] = useState<string>('');

  const minute: IMinute = {
    minute: {
      start_date: date.start_date,
      end_date: moment().format(),
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

  const createMinute = async () => {
    const btn = <a href="/minutes">Visualizar ata</a>;

    try {
      const response = await api.post('minutes', minute);

      notification.success({
        message: 'Sucesso',
        description: 'Sua ata foi criada com sucesso',
        btn,
      });

      setGeneratedMinute(response.data);
    } catch (error) {
      notification.error({
        message: 'Erro gerar uma nova ata',
        description:
          'Verifique se todos os campos estão preenchidos, caso o problema persista consulte o adminsitrador',
      });
    }
  };

  return (
    <MinuteContext.Provider
      value={{
        handleSetTopics,
        handleSetParticipants,
        handleSetSchedules,
        handleSetAreas,
        setParticipants,
        createMinute,
        setSchedules,
        setProject,
        setAreas,
        setPlace,
        setDate,
        date,
        minute,
        generatedMinute,
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
