import { PlanCard } from "../../blocks/PlanCard";
import { ProtectionLight } from "../../icons/ProtectionLight";

export const SelectPlan = () => {
  return (
    <div className="select-plan">
      <PlanCard
        icon={<ProtectionLight />}
        title="Para mí"
        checked
        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      />
      <PlanCard
        icon={<ProtectionLight />}
        title="Para alguien mí"
        description="Realiza una cotización para uno de tus familiares o cualquier persona."
      />
    </div>
  );
};
