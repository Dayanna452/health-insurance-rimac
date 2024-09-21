import { Stepper } from "../../blocks/Stepper";

const steps = [
  { title: "Planes y coberturas", active: true },
  { title: "Resumen", active: false },
];

export const StepperPlans = () => {
  return (
    <div className="stepper__section py-16 flex-center">
      <Stepper steps={steps} />
    </div>
  );
};
