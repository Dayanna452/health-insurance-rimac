import { FC } from "react";

import { Header } from "../contents/Header";
import { StepperPlans } from "../contents/StepperPlans";
import { PlansOptions } from "../contents/PlansOptions";

export const PlansLayout: FC = () => {
  return (
    <div className="template">
      <Header />
      <main>
        <StepperPlans />
        <PlansOptions />
      </main>
    </div>
  );
};
