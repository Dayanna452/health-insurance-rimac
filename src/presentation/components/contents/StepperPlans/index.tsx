import { Stepper } from "../../blocks/Stepper";
import { StepperMobile } from "../../blocks/Stepper/parts/StepperMobile";

const steps = [
  { title: "Planes y coberturas", active: true },
  { title: "Resumen", active: false },
];

export const StepperPlans = () => {
  return (
    <>
      <section className="stepper__section">
        <Stepper steps={steps} />
      </section>
      <section className="container stepper__section-mobile">
        <StepperMobile />
      </section>
    </>
  );
};
