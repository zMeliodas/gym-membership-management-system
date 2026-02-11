import type { IconType } from "react-icons";

export interface ButtonTypes {
  Icon?: IconType;
  title?: string;
  link: string;
}

export interface CardTypes {
  title?: string;
  Icon?: IconType;
  value?: string;
}

export interface ScheduleCardTypes {
  title?: string;
  Icon?: IconType;
  value?: string;
}

export interface ScheduleTypes {
  title: string;
  time?: string;
  instructor?: string;
  students?: string;
}
