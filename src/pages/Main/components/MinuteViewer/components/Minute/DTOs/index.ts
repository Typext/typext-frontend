export interface ITopic {
  topic: string;
}

export interface ISubject {
  subject: String;
  responsible: String;
  deadLine: String;
}

export interface IMember {
  name: String;
  role: String;
  enterprise: String;
  phone: String;
  email: String;
}

export interface IProjectInfo {
  projectName: String;
  members: Array<IMember>;
}

export interface IAddressAndHour {
  local: String;
  startDate: String;
  startHour: String;
}

export interface IMinute {
  addressAndHour: IAddressAndHour;
  projectInfo: IProjectInfo;
  subjects: Array<ISubject>;
  topics: Array<ITopic>;
  distributions: Array<String>;
}
