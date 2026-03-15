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
    link: "/",
    at: "@enscclub_ucr",
    Icon: FiInstagram,
  },
  {
    name: "Email",
    link: "/",
    at: "enscclubatucr@gmail.com",
    Icon: FiMail,
  },
  {
    name: "Linktree",
    link: "/",
    at: "@enscclub_ucr",
    Icon: SiLinktree,
  },
];

export default socialslinks;
