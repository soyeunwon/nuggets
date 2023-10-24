import { create } from "zustand";

export const useStoreDarkmode: any = create((set, get) => ({
  isDarkmode: false,
  setIsDarkmode: (isDarkmode: boolean) => {
    set({ isDarkmode });
    localStorage.setItem("isDarkmode", String(isDarkmode));
  },
}));
