import { FC } from "react";
import { Header } from "../contents/Header";
import { StepperPlans } from "../contents/StepperPlans";

export const PlansLayout: FC = () => {
  return (
    <div className="template">
      <Header />
      <main>
        <StepperPlans />
      </main>
    </div>
  );
};
