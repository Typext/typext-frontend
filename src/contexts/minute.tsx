import React, { createContext, useCallback, useContext, useState } from 'react';
import { notification } from 'antd';

import api from 'services/api';

import {
  ITopic,
  IDateState,
  IParticipant,
  IMinute,
  IMinutes,
  GeneratedMinute,
  IMinuteContextData,
  IMinuteLog,
} from 'DTOs/Minute';

interface IMinuteProvider {
  children: React.ReactNode;
}

export const MinuteContext = createContext({} as IMinuteContextData);

const MinuteProvider: React.FC<IMinuteProvider> = ({
  children,
}: IMinuteProvider) => {
  const [minuteForReview, setMinuteForReview] = useState<IMinute | undefined>();
  const [generatedMinute, setGeneratedMinute] = useState<
    GeneratedMinute | undefined
  >();

  const [minutes, setMinutes] = useState<Array<IMinutes | undefined>>([]);
  const [minutesError, setMinutesError] = useState('');
  const [minutesLoader, setMinutesLoader] = useState(false);

  const [minuteLogs, setMinuteLogs] = useState<Array<IMinuteLog> | undefined>();
  const [minuteLogsError, setMinuteLogsError] = useState('');
  const [minuteLogsLoader, setMinuteLogsLoader] = useState(false);

  const [topics, setTopics] = useState<ITopic[]>([]);
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [date, setDate] = useState<IDateState>({} as IDateState);
  const [schedules, setSchedules] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [project, setProject] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [reviewEnable, setReviewEnable] = useState<boolean>(false);

  const [scheduleError, setScheduleError] = useState(null);
  const [scheduleLoading, setScheduleLoading] = useState<boolean>(true);

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

  const getSingleMinute = useCallback(async (minuteID: string | undefined) => {
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

  const scheduleMinute = async () => {
    setScheduleError(null);
    setScheduleLoading(true);

    const minuteToSchedule: IMinute = {
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

    try {
      await api.post('/schedule', minuteToSchedule);
    } catch (err) {
      const errorData = err.response?.data;
      const celebrateError = errorData?.validation?.body?.message;

      setScheduleError(celebrateError || errorData?.message);
    }

    setScheduleLoading(false);
  };

  const getMinutes = useCallback(async () => {
    try {
      setMinutesLoader(true);
      const response = await api.get('minutes');

      setMinutes(response.data);
      setMinutesLoader(false);
    } catch (err) {
      const errorData = err.response?.data;
      const celebrateError = errorData?.validation?.body?.message;

      setMinutesError(celebrateError || errorData?.message);
      setMinutesLoader(false);
    }
  }, []);

  const getMinuteLogs = useCallback(async (id: number) => {
    try {
      setMinuteLogsLoader(true);

      const response = await api.get(`/logs/${id}`);

      setMinuteLogs(response.data);
      setMinuteLogsLoader(false);
    } catch (err) {
      const errorData = err.response?.data;
      const celebrateError = errorData?.validation?.body?.message;

      setMinuteLogsError(celebrateError || errorData?.message);
      setMinuteLogsLoader(false);
    }
  }, []);

  return (
    <MinuteContext.Provider
      value={{
        setDate,
        setAreas,
        setPlace,
        setProject,
        setSchedules,
        createMinute,
        handleSetAreas,
        scheduleMinute,
        setReviewEnable,
        handleSetTopics,
        setParticipants,
        handleSetSchedules,
        handleSetParticipants,
        scheduleLoading,
        minuteForReview,
        generatedMinute,
        scheduleError,
        reviewEnable,
        minute,
        date,
        minutes,
        minutesError,
        minutesLoader,
        getSingleMinute,
        getMinutes,
        minuteLogs,
        minuteLogsError,
        minuteLogsLoader,
        getMinuteLogs,
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
