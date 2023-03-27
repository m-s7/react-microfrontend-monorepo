import React, { createContext } from 'react';
import { ShellContextProps } from './types';

export const ShellContext = createContext<ShellContextProps>({ authToken: 'initial' });

export const ShellProvider = (props: React.PropsWithChildren<ShellContextProps>) => {
  const { children, ...rest } = props;

  return <ShellContext.Provider value={rest}>{children}</ShellContext.Provider>;
};
