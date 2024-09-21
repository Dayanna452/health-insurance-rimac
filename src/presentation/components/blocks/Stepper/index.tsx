import { FC } from "react";
import { DashedLine } from "../../icons/DashedLine";

interface StepsProps {
  steps: { title: string; active: boolean }[];
}

export const Stepper: FC<StepsProps> = ({ steps }) => {
  return (
    <div className="stepper-container d-flex gap-16">
      {steps.map((step, index) => (
        <>
          <div
            key={index}
            className="stepper inline-flex-center gap-16"
            data-active={step.active}
          >
            <div className="stepper__number inline-flex-center">
              {index + 1}
            </div>
            <span className="stepper__text">{step.title}</span>
          </div>
          <DashedLine />
        </>
      ))}
    </div>
  );
};
