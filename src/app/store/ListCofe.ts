import { create } from "zustand";

type StoreState = {
  NameCofe: string;
  Price: number;
};

const useCofeItem = create<StoreState>(() => ({
  NameCofe: "",
  Price: 19.83,
}));

// Експорт всіх створених станів
export { useCofeItem };
