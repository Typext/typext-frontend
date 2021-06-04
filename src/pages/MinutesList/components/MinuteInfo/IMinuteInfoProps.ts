import { ButtonHTMLAttributes } from 'react';

export interface IMinuteInfoProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string | undefined;
  date: string | undefined;
  status: string | undefined;
  schedule: Array<string> | undefined;
}
