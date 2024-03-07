import { GanttContextType, GanttActions } from './constants';

import { getDateScale } from './helpers';

const ganttReducer = (state: GanttContextType, action: GanttActions) => {
  switch (action.type) {
    case 'SET_INITIAL_DATE_SCALE': {
      return { ...state, dateScale: getDateScale(action.totalWidth) };
    }
    default:
      return state;
  }
};

export default ganttReducer;
