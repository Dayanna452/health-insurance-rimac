import { FC } from "react";
import { GiCircle } from "react-icons/gi";
import { FaCircleCheck } from "react-icons/fa6";

interface PlanCardProps {
  title: string;
  checked?: boolean;
  icon: JSX.Element;
  description: string;
  onChecked?: (checked?: boolean) => void;
}

export const PlanCard: FC<PlanCardProps> = ({
  icon,
  title,
  checked,
  description,
  onChecked,
}) => {
  return (
    <div className="plan-card" data-checked={checked}>
      <div className="d-flex justify-content-end">
        <i
          className="plan-card-radio"
          data-checked={checked}
          onClick={() => onChecked?.(checked)}
        >
          {checked ? <FaCircleCheck /> : <GiCircle />}
        </i>
      </div>
      <div className="plan-card-content mb-8">
        <i className="plan-card-content__icon">{icon}</i>
        <p className="plan-card-content__title">{title}</p>
      </div>
      <p className="plan-card__description">{description}</p>
    </div>
  );
};
