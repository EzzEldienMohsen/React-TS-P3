import React from 'react';

type Timer = {
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
type Action = {
  type: 'ADD_TIMERS' | 'START_TIMERS' | 'STOP_TIMERS';
};
type TimeProps = {
  children: React.ReactNode;
};
const timerReducer = (state: TimersState, action: Action): TimersState => {};

const TimersContext = React.createContext<TimersContextValue | null>(null);
export const useGlobalContext = () => React.useContext(TimersContext)!;
const TimerContextProvider: React.FC<TimeProps> = ({ children }) => {
  const [timerState, dispatch] = React.useReducer(reducer, initialState);
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMERS' });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimerContextProvider;
