import { create } from "zustand";

type LikeState = {
  Popular: string;
  HowyouLikedCofe: string;
  usePopularFn: (type: string) => void;
  setHowYouLikedCofe: (value: string) => void;
};

type useVisibility = {
  isVisible: boolean;
  toggleSendData: (state: boolean) => void;
};

type useVisibility2 = {
  sendData: boolean;
  toggleSendData: (state: boolean) => void;
};

const useLiked = create<LikeState>((set) => ({
  Popular: "",
  HowyouLikedCofe: "",
  usePopularFn: (type: string) => set({ Popular: type }),
  setHowYouLikedCofe: (value: string) => set({ HowyouLikedCofe: value }),
}));

const useVisibilityStore = create<useVisibility>((set) => ({
  isVisible: false,
  toggleSendData: () => set((state) => ({ isVisible: !state.isVisible })),
}));

const useStore = create<useVisibility2>((set) => ({
  sendData: true,
  toggleSendData: () => set((state) => ({ sendData: !state.sendData })),
}));

export { useLiked, useVisibilityStore, useStore };
