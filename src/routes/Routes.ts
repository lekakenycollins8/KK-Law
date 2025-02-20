import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/about/AboutDetails"));
const Contact = lazy(() => import("../pages/contacts/Contacts"));
const Features = lazy(() => import("../pages/features/FeaturesDetails"));

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    name: "Home",
  },
  {
    path: "/about-us",
    component: About,
    name: "About us",
  },
  {
    path: "/contact-us",
    component: Contact,
    name: "Contact us",
  },
  {
    path: "practice-areas/:id?",
    component: Features,
    name: "Practice Areas",
  },
];
const routesConfig = [...routes];

export default routesConfig;
