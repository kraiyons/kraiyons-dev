import { createContext } from 'react';

const defaultValue = {
  darkMode: false,
};
const Context = createContext(defaultValue);

function AppWrapper({ children }) {
  return <Context.Provider value={defaultValue}>{children}</Context.Provider>;
}

export default AppWrapper;
