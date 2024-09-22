import { Stepper } from "../../blocks/Stepper";
import { StepperMobile } from "../../blocks/Stepper/parts/StepperMobile";

const steps = [
  { title: "Planes y coberturas", active: true },
  { title: "Resumen", active: false },
];

export const StepperPlans = () => {
  return (
    <>
      <div className="stepper__section">
        <Stepper steps={steps} />
      </div>
      <div className="container stepper__section-mobile">
        <StepperMobile steps={steps} />
      </div>
    </>
  );
};
