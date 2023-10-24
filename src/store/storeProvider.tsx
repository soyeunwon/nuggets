import { useRef } from "react";
import { initializeStore, Provider, type TStore } from "./rootStore";

const StoreProvider = ({ children, initialZustandState }) => {
  const storeRef = useRef<TStore>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(initialZustandState);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
