import { create } from "zustand";

type CountCofePage = {
  CountCofe: number;
  setAddOrderOrder: (count: number) => void;
};

const useCountCofe = create<CountCofePage>((set) => ({
  CountCofe: 0,
  setAddOrderOrder: (count) => set({ CountCofe: count }),
}));

export default useCountCofe;
