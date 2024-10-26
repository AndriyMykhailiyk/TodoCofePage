import { create } from "zustand";

type CofeState = {
  DarkChoko: string;
  Cofeinnn: string;
  increaseCount: (type: string) => void;
  AddCofein: (type: string) => void;
};

type TasteCofeType = {
  TypeCofeTwo: string[];
  useTypeCofeTwoFunckk: (type: string[]) => void;
};

const useTypeCofe = create<CofeState>((set) => ({
  DarkChoko: "",
  Cofeinnn: "",
  increaseCount: (type: string) => set({ DarkChoko: type }),
  AddCofein: (type: string) => set({ Cofeinnn: type }),
}));

const useTypeCofeTwo = create<TasteCofeType>((set) => ({
  TypeCofeTwo: [], // Ініціалізація як пустий масив
  useTypeCofeTwoFunckk: (type: string[]) => set({ TypeCofeTwo: type }),
}));

export { useTypeCofe, useTypeCofeTwo };
