export interface navigation {
  name: string;
  link: string;
}
const navigations: navigation[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Board",
    link: "/board",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
export default navigations;
