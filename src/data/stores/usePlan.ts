import { create } from "zustand";
interface PlanStoreType {
  selectedForWhoPlan: "me" | "other";
  setSelectedForWhoPlan: (selected: "me" | "other") => void;
  selectedPlan: Record<string, any> | null;
  setSelectedPlan: (selected: Record<string, any>) => void;
}

export const usePlan = create<PlanStoreType>((set) => ({
  selectedForWhoPlan: "me",
  setSelectedForWhoPlan: (selected: "me" | "other") =>
    set(() => ({ selectedForWhoPlan: selected })),
  selectedPlan: null,
  setSelectedPlan: (selected: Record<string, any>) =>
    set(() => ({ selectedPlan: selected })),
}));
