import { IconType } from "react-icons";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  summary: string;
  achievements: string[];
  icon: IconType;
  logo: string;
}
