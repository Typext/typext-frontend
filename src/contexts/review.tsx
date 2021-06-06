import React, { createContext, useCallback, useContext, useState } from 'react';

import {
  ITopic,
  IDateState,
  IParticipant,
  IMinute,
  IReviewContextData,
} from 'DTOs/Minute';
import api from 'services/api';
import { notification } from 'antd';

interface IReviewProvider {
  children: React.ReactNode;
}

export const ReviewContext = createContext({} as IReviewContextData);

const ReviewProvider: React.FC<IReviewProvider> = ({
  children,
}: IReviewProvider) => {
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

  const handleUpdateMinute = async (id: string) => {
    try {
      await api.put('minutes', { minute_id: id, ...minute });
      notification.success({
        message: 'Successo',
        description:
          'Sua ata foi atualizada com sucesso !',
      });
    } catch (error) {
      notification.error({
        message: 'Erro',
        description:
          'Verifique os campos novamente, caso o problema persista contacte os administradores',
      });
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        setDate,
        setAreas,
        setPlace,
        setProject,
        setSchedules,
        handleSetAreas,
        handleSetTopics,
        setParticipants,
        handleSetSchedules,
        handleSetParticipants,
        handleUpdateMinute,
        setTopics,
        minute,
        date,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

function useReview(): IReviewContextData {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error('useUsers must be used within an UsersProvider');
  }

  return context;
}

export { ReviewProvider, useReview };
