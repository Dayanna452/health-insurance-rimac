import Home from "../pages";
import Plans from "../pages/Plans";
import Resume from "../pages/Resume";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/plans",
    exact: true,
    component: Plans
  },
  {
    path: "/resume",
   component: Resume
  }
]