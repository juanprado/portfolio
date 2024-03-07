'use client';

import { GanttProvider } from './ganttContext';
import GanttChart from './GanttChart';

export default function GanttContainer() {
  return (
    <GanttProvider>
      <GanttChart />
    </GanttProvider>
  );
}
