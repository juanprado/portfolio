import {
  createContext,
  useReducer,
  useContext,
  useMemo,
} from 'react';

import type { PropsWithChildren, Dispatch } from 'react';
import type { GanttContextType } from './constants';

import ganttReducer from './ganttReducer';
import { getFakeUsers, getFakeTasks } from './helpers';

const users = getFakeUsers();

const initialState: GanttContextType = {
  users,
  tasks: getFakeTasks(Object.values(users)),
  dateScale: undefined,
};

const initialDispatch: Dispatch<unknown> = () => null;

const GanttContext = createContext({ state: initialState, dispatch: initialDispatch });

function GanttProvider(props: PropsWithChildren) {
  const { children } = props;
  const [state, dispatch] = useReducer(ganttReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <GanttContext.Provider value={value}>{children}</GanttContext.Provider>;
}

const useGanttContext = () => {
  const context = useContext(GanttContext);

  if (context === undefined) {
    throw new Error('useGanttContext must be used within a GanttProvider');
  }

  return context;
};

export { GanttProvider, useGanttContext };
