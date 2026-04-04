import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { SiLinktree } from "react-icons/si";
import { IconType } from "react-icons";

export interface socialslink {
  name: string;
  link: string;
  at: string;
  Icon: IconType;
}

const socialslinks: socialslink[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/enscclub_ucr?igsh=NTc4MTIwNjQ2YQ%3D%3D",
    at: "@enscclub_ucr",
    Icon: FiInstagram,
  },
  {
    name: "Email",
    link: "mailto:enscclubatucr@gmail.com",
    at: "enscclubatucr@gmail.com",
    Icon: FiMail,
  },
  {
    name: "Linktree",
    link: "https://linktr.ee/enscclub_ucr?utm_source=linktree_profile_share&ltsid=00a8f664-c172-4f90-a4e8-e05aaaa6731e",
    at: "@enscclub_ucr",
    Icon: SiLinktree,
  },
];

export default socialslinks;
