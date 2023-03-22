import { createContext } from 'react';

type MyContext = {
  name: string;
};

export const MyContext = createContext<MyContext>({ name: 'initial' });
