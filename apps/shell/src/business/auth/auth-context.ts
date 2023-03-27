import { createContext } from 'react';

export const AuthContext = createContext<{ authToken: string }>({ authToken: 'initial' });
