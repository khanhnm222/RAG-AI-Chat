'use client';

import GlobalProvider from '@/contexts/app-context';
import React from 'react';

export interface BaseProviderProps {
  children: React.ReactNode;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export interface AppContextProps {
  firstTimeVisit: boolean;
  setFirstTimeVisit: (value: any) => void;
}

export const AppContext = React.createContext<AppContextProps>({
  firstTimeVisit: false,
  setFirstTimeVisit: () => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [firstTimeVisit, setFirstTimeVisit] = React.useState<boolean>(false);
  return (
    <AppContext.Provider value={{ firstTimeVisit, setFirstTimeVisit}}>
      <GlobalProvider>{children}</GlobalProvider>
    </AppContext.Provider>
  );
};
