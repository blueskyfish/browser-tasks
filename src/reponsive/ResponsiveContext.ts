import { createContext } from 'react';
import { ResponsiveSize, ResponsiveState } from './ResponsiveModel';


export const ResponsiveContext = createContext<ResponsiveState>({ size: ResponsiveSize.xs });