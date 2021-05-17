/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';
import { notification } from 'antd';

import api from 'services/api';

import {
  ITopic,
  IDateState,
  IParticipant,
  IMinute,
  GeneratedMinute,
} from 'DTOs/Minute';

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
  getMinute: (minuteId: string) => Promise<void>;
  setReviewEnable: (reviewEnable: boolean) => void;
  reviewEnable: boolean;
  setParticipants: Function;
  setSchedules: Function;
  setAreas: Function;
  setProject: Function;
  setPlace: Function;
  date: IDateState;
  minute: IMinute;
  minuteForReview: IMinute | undefined;
  generatedMinute: GeneratedMinute | undefined;
}

export const MinuteContext = createContext({} as IMinuteContextData);

const MinuteProvider: React.FC<IMinuteProvider> = ({
  children,
}: IMinuteProvider) => {
  const [minuteForReview, setMinuteForReview] = useState<IMinute | undefined>();
  const [generatedMinute, setGeneratedMinute] = useState<
    GeneratedMinute | undefined
  >();
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [date, setDate] = useState<IDateState>({} as IDateState);
  const [schedules, setSchedules] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [project, setProject] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [reviewEnable, setReviewEnable] = useState<boolean>(false);

  const minute: IMinute = {
    minute: {
      start_date: date.start_date,
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
        setTopics([...topics, newTopic]);
      }
    },
    [topics],
  );

  const handleSetParticipants = useCallback(
    participant => {
      if (participant) {
        setParticipants([
          ...participants,
          { ...participant, digital_signature: false },
        ]);
      }
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
    try {
      const response = await api.post('minutes', minute);

      notification.success({
        message: 'Sucesso',
        description: 'Sua ata foi criada com sucesso',
        btn: <a href="/minutes">Visualizar ata</a>,
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

  const getMinute = useCallback(async (minuteID: string) => {
    try {
      const response = await api.get(`minutes/${minuteID}`);

      setMinuteForReview(response.data);
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: 'Ata não encontrada',
      });
    }
  }, []);

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
        minuteForReview,
        reviewEnable,
        getMinute,
        setReviewEnable,
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
