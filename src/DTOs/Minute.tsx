/* eslint-disable no-unused-vars */
export interface ITopic {
  name: string;
  responsible: string;
  deadline: string;
}

export interface IDateState {
  start_date: string;
  start: { hour: string; date: string };
}

export interface IParticipant {
  name: string;
  email: string;
  title: string;
  company: string;
  phone: string;
  digital_signature: boolean;
}

export interface IDate {
  start_date: string;
}

export interface IMinute {
  minute: {
    start_date: string;
    place: string;
    project: string;
    schedules: Array<string>;
    areas: Array<string>;
  };
  participant?: Array<IParticipant>;
  topic?: Array<ITopic>;
  participants?: Array<IParticipant>;
  topics?: Array<ITopic>;
}

export interface GeneratedTopic extends ITopic {
  created_at: string;
  updated_at: string;
}

export interface GeneratedParticipant extends IParticipant {
  id: number;
  digital_signature: boolean;
  created_at: string;
  updated_at: string;
}

export interface GeneratedMinute {
  minute: {
    id: number;
    created_at: string;
    updated_at: string;
    status: string;
    start_date: string;
    place: string;
    project: string;
    schedules: Array<string>;
    areas: Array<string>;
  };
  participants: Array<GeneratedParticipant>;
  topics: Array<GeneratedTopic>;
}

export interface IMinuteContextData {
  handleSetTopics: (topic: Omit<ITopic, 'id'>) => void;
  handleSetParticipants: (participant: IParticipant) => void;
  handleSetSchedules: (schedule: string) => void;
  handleSetAreas: (area: string) => void;
  setDate: (date: IDateState) => void;
  createMinute: () => void;
  setReviewEnable: (reviewEnable: boolean) => void;
  getSingleMinute: (minuteId: string) => Promise<void>;
  getMinutes: () => void;
  scheduleMinute: Function;
  scheduleLoading: boolean;
  scheduleError: any;
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
  minutes: Array<IMinutes | undefined>;
  minutesError: string;
  minutesLoader: boolean;
}
export interface IMinutes {
  id: string | undefined;
  start_date: string;
  end_date: string;
  minute_number: string;
  place: string;
  project: string;
  schedules: Array<string>;
  areas: Array<string>;
  status: string;
  created_at: string;
  updated_at: string;
}
