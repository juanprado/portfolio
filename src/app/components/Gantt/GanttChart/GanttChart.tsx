import { useCallback, useEffect } from 'react';
import { timeDay } from 'd3-time';

import { useGanttContext } from '@/app/components/Gantt/ganttContext';

export default function GanttChart() {
  const { state, dispatch } = useGanttContext();

  const setInitialScale = useCallback(() => {
    dispatch({ type: 'SET_INITIAL_DATE_SCALE', totalWidth: window.innerWidth });
  }, [dispatch]);

  const ticks = state?.dateScale?.ticks(timeDay) ?? [];

  console.log(ticks);

  useEffect(() => {
    setInitialScale();
    window.addEventListener('resize', setInitialScale);
    return () => window.removeEventListener('resize', setInitialScale);
  }, [setInitialScale]);

  return <h1>Hello</h1>;
}
