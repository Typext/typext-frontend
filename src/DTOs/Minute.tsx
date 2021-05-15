export interface ITopic {
  id: number;
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
}

export interface IDate {
  start_date: string;
  end_date: string;
}

export interface IMinute {
  minute: {
    start_date: string;
    end_date: string;
    place: string;
    project: string;
    schedules: Array<string>;
    areas: Array<string>;
    minute_number?: string;
  };
  participant: Array<IParticipant>;
  topic: Array<ITopic>;
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
    end_date: string;
    place: string;
    project: string;
    schedules: Array<string>;
    areas: Array<string>;
    minute_number?: string;
  };
  participants: Array<GeneratedParticipant>;
  topics: Array<GeneratedTopic>;
}

export interface IMinutes {
  id: number;
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
