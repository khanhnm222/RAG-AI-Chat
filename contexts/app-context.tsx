'use client';

import { Dispatch, createContext, useContext, useMemo, useReducer } from 'react';

export type Context = {
  globalState: any;
  dispatch: Dispatch<any>;
};

const initialState = {
  firstTimeVisit: false,
};

export const setFirstTimeVisit = (
  firstTimeVisit: boolean
): {
  type: 'FIRST_TIME_VISIT';
  payload: {
    firstTimeVisit: boolean;
  };
} => ({
  type: 'FIRST_TIME_VISIT',
  payload: {
    firstTimeVisit,
  },
});

const reducers = (globalState: any, action: ReturnType<typeof setFirstTimeVisit>) => {
  switch (action.type) {
    case 'FIRST_TIME_VISIT':
      return { ...globalState, firstTimeVisit: action.payload.firstTimeVisit };
    default:
      return globalState;
  }
};

const globalStateContext = createContext({} as Context);

const GlobalProvider = ({ children }: any) => {
  const [globalState, dispatch] = useReducer(reducers, { ...initialState });
  const store = useMemo(
    () => ({ globalState, dispatch }),
    [globalState]
  );
  return <globalStateContext.Provider value={store}>{children}</globalStateContext.Provider>;
};

const useGlobalContext = () => {
  const context = useContext(globalStateContext);
  return context;
};

export { useGlobalContext };
export default GlobalProvider;
