import React from 'react';
import Timer from '../components/Timer';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};
const initialState: TimersState = {
  isRunning: false,
  timers: [],
};
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
type StartTimerAction = {
  type: 'START_TIMERS';
};
type StopTimerAction = {
  type: 'STOP_TIMERS';
};
type AddTimerAction = {
  type: 'ADD_TIMERS';
  payload: Timer;
};
type Action = StartTimerAction | StopTimerAction | AddTimerAction;
type TimeProps = {
  children: React.ReactNode;
};
const timerReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === 'ADD_TIMERS') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
};

const TimersContext = React.createContext<TimersContextValue | null>(null);
export const useGlobalContext = () => React.useContext(TimersContext)!;
const TimerContextProvider: React.FC<TimeProps> = ({ children }) => {
  const [timerState, dispatch] = React.useReducer(timerReducer, initialState);
  const ctx: TimersContextValue = {
    isRunning: timerState.isRunning,
    timers: timerState.timers,
    addTimer(timer) {
      dispatch({ type: 'ADD_TIMERS', payload: timer });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimerContextProvider;
