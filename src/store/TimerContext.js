import { createContext } from 'react';
import { COLORS, FONTS, TIMERS } from '../constants';

const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const timerContextValue = {
    timerActive: TIMERS.POMODORO,
    pomodoroValue: 25,
    shortBreakValue: 5,
    longBreakValue: 15,
    fontSelected: FONTS.KUMBH_SANS,
    colorSelected: COLORS.ORANGE_RED,
  };

  return (
    <TimerContext.Provider value={timerContextValue}>
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider, TimerContext };
