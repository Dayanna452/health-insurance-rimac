import { create } from "zustand";

interface ICount {
  count: number;
  inc: () => void;
}

export const useCount = create<ICount>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
