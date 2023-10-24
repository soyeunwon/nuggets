import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";

export type TInitialStore = any;

export type TStore = ReturnType<typeof initializeStore>;

const initStore = {};

const zustandContext = createContext<TStore | null>(null);

export const Provider = zustandContext.Provider;

export const useStoreSSR = <T>(selector: (state: TInitialStore) => T) => {
  const store = useContext(zustandContext);
  if (!store) throw new Error("Store is missing the provider");

  return useZustandStore(store, selector);
};

export const initializeStore = (
  preloadedState: Partial<TInitialStore> = {}
) => {
  return createStore<TInitialStore>((set, get) => ({
    ...initStore,
    ...preloadedState,
  }));
};
