import { createContext, useState } from 'react';
import { COLORS, FONTS, TIMERS } from '../constants';

const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const [activeTimer, setActiveTimer] = useState(TIMERS.POMODORO);

  const changeActiveTimer = (newActiveTimer) => {
    setActiveTimer(newActiveTimer);
  };

  const timerContextValue = {
    activeTimer,
    pomodoroValue: 25,
    shortBreakValue: 5,
    longBreakValue: 15,
    selectedFont: FONTS.KUMBH_SANS,
    selectedColor: COLORS.ORANGE_RED,
    changeActiveTimer,
  };

  return (
    <TimerContext.Provider value={timerContextValue}>
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider, TimerContext };
