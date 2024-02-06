import React from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
type TimeProps = {
  children: React.ReactNode;
};

const TimersContext = React.createContext<TimersContextValue | null>(null);

const TimerContextProvider: React.FC<TimeProps> = ({ children }) => {
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimerContextProvider;
