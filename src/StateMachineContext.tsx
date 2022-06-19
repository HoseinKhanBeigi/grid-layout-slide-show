import * as React from 'react';
import { StateMachineContextValue } from './types';
import storeFactory from './storeFactory';
import { PERSIST_BEFORE_UNLOAD } from './constants';
const StateMachineContext = React.createContext<StateMachineContextValue>(undefined as any);

type PropsChildren = {
  children?: React.ReactNode;
};

export const StateMachineProvider: React.FC<PropsChildren> = ({ children }) => {
  const [state, setState] = React.useState(storeFactory.state);

  React.useEffect(() => {
    if (storeFactory.options.persist === PERSIST_BEFORE_UNLOAD) {
      window.onbeforeunload = () => storeFactory.saveStore();
      storeFactory.options.storageType.removeItem(storeFactory.options.name);
    }
  }, []);
  return (
    <StateMachineContext.Provider value={{ state, setState }}>
      {children}
    </StateMachineContext.Provider>
  );

}

export const useStateMachineContext = () =>
  React.useContext<StateMachineContextValue>(StateMachineContext);