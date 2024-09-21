import Home from "./pages";
import Plans from "./pages/plans";
import Resume from "./pages/resume";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/plans",
    exact: true,
    component: Plans,
  },
  {
    path: "/resume",
    component: Resume,
  },
];
