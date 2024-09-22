import { IoChevronBackCircleOutline } from "react-icons/io5";
import { LineStep } from "./LineStep";
import { FC } from "react";

interface StepperMobileProps {
  steps: { title: string; active: boolean }[];
}

export const StepperMobile: FC<StepperMobileProps> = () => {
  return (
    <div className="d-flex align-items-center gap-16">
      <IoChevronBackCircleOutline className="stepper-mobile-back__icon" />
      <span className="stepper-mobile-back__text">PASO 1 DE 2</span>
      <LineStep />
    </div>
  );
};
