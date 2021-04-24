import { createContext, useContext } from 'react';

const ListingsContext = createContext();

export function ListingsWrapper({ children }) {
  let sharedState = {/* whatever you want */}

  return (
    <ListingsWrapper.Provider value={sharedState}>
      {children}
    </ListingsWrapper.Provider>
  );
}

export function useListingsContext() {
  return useContext(ListingsContext);
}