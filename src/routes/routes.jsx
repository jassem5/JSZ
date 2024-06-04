import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Options } from "../components/Options";
import { Ouvrier } from "../components/Ouvrier";
import { Pfe } from "../components/Pfe";

export const routes = [
  {
    path: "/",
    element: <Home />,
    head: <Header />,
  },
  {
    path: "/options",
    element: <Options />,
    head: <Header />,
  },
  {
    path: "/ouvrier",
    element: <Ouvrier />,
  },
  {
    path: "/pfe",
    element: <Pfe />,
  },
  {
    path: "*",
    element: <div>no route</div>,
  },
];
