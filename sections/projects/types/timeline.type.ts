import { IconType } from "react-icons";

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  summary: string;
  achievements: string[];
  icon: IconType;
  logo: string;
}
