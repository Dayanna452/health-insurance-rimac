import { create } from "zustand";

interface PlanStoreType {
  selectedPlan: "me" | "other";
  setSelectedPlan: (selected: "me" | "other") => void;
}

export const usePlan = create<PlanStoreType>((set) => ({
  selectedPlan: "me",
  setSelectedPlan: (selected: "me" | "other") =>
    set(() => ({ selectedPlan: selected })),
}));
