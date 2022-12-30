import create from "zustand";

type StoreState = {
  value: number;
  mode: boolean;
  increment: () => void;
  decrement: () => void;
  toggleMode: () => void;
};

export const useStore = create<StoreState>((set) => ({
  value: 0,
  mode: false,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
  toggleMode: () =>
    set((state) => ({
      mode: !state.mode,
    })),
}));
