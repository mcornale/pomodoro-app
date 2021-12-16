import { createContext } from 'react';

const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const timerContextValue = {
    pomodoroValue: 25,
    shortBreakValue: 5,
    longBreakValue: 15,
    fontSelected: 'Kumbh Sans',
    colorSelected: '#f87070',
  };

  return (
    <TimerContext.Provider value={timerContextValue}>
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider, TimerContext };
