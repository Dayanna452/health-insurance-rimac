import { FC } from "react";

import { Header } from "../contents/Header";
import { StepperPlans } from "../contents/StepperPlans";
import { PlanOptions } from "../contents/PlanOptions";

export const PlansLayout: FC = () => {
  return (
    <div className="template">
      <Header />
      <main>
        <StepperPlans />
        <PlanOptions />
      </main>
    </div>
  );
};
