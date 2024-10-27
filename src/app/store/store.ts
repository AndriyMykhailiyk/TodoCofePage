import { create } from "zustand";

// Типи для LikeState, Visibility і Visibility2
type LikeState = {
  Popular: string;
  HowyouLikedCofe: string;
  usePopularFn: (type: string) => void;
  setHowYouLikedCofe: (value: string) => void;
};

type VisibilityState = {
  isVisible: boolean;
  toggleSendData: () => void;
};

type StoreState = {
  sendData: boolean;
  toggleSendData: (state: boolean) => void; // Оновлено тип toggleSendData
};

// Типи для стану кави та смаку
type CofeState = {
  DarkChoko: string;
  Cofeinnn: string;
  increaseCount: (type: string) => void;
  AddCofein: (type: string) => void;
};

type TasteCofeType = {
  TypeCofeTwo: string[];
  useTypeCofeTwoFunc: (type: string[]) => void;
};

// Створення zustand для LikeState
const useLiked = create<LikeState>((set) => ({
  Popular: "",
  HowyouLikedCofe: "",
  usePopularFn: (type: string) => set({ Popular: type }),
  setHowYouLikedCofe: (value: string) => set({ HowyouLikedCofe: value }),
}));

// Створення zustand для Visibility
const useVisibilityStore = create<VisibilityState>((set) => ({
  isVisible: false,
  toggleSendData: () => set((state) => ({ isVisible: !state.isVisible })),
}));

// Створення zustand для StoreState
const useStore = create<StoreState>((set) => ({
  sendData: true,
  toggleSendData: (state: boolean) => set(() => ({ sendData: state })),
}));
// Створення zustand для CofeState
const useTypeCofe = create<CofeState>((set) => ({
  DarkChoko: "",
  Cofeinnn: "",
  increaseCount: (type: string) => set({ DarkChoko: type }),
  AddCofein: (type: string) => set({ Cofeinnn: type }),
}));

// Створення zustand для TasteCofeType
const useTypeCofeTwo = create<TasteCofeType>((set) => ({
  TypeCofeTwo: [],
  useTypeCofeTwoFunc: (type: string[]) => set({ TypeCofeTwo: type }),
}));

// Експорт всіх створених станів
export { useLiked, useVisibilityStore, useStore, useTypeCofe, useTypeCofeTwo };
