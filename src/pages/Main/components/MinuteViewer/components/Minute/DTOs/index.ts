export interface ITopic {
  topic: String;
  responsible: String;
  deadLine: String;
}

export interface ISubject {
  subject: String;
}

export interface IMember {
  name: String;
  role: String;
  enterprise: String;
  phone: String;
  email: String;
}

export interface IProjectInfo {
  name: String;
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
