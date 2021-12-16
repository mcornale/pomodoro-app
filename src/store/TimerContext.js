import { createContext, useState } from 'react';
import { COLORS, FONTS, TIMERS, TIMER_STATUS } from '../constants';

const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const [activeTimer, setActiveTimer] = useState(TIMERS.POMODORO);
  const [timerStatus, setTimerStatus] = useState(TIMER_STATUS.PAUSED);

  const changeActiveTimer = (newActiveTimer) => {
    setActiveTimer(newActiveTimer);
  };

  const changeTimerStatus = (newTimerStatus) => {
    setTimerStatus((prevTimerStatus) => {
      if (!newTimerStatus) {
        if (prevTimerStatus === TIMER_STATUS.PAUSED)
          newTimerStatus = TIMER_STATUS.COUNTING;
        if (prevTimerStatus === TIMER_STATUS.COUNTING)
          newTimerStatus = TIMER_STATUS.PAUSED;
      }

      return newTimerStatus;
    });
  };

  const timerContextValue = {
    activeTimer,
    pomodoroMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 15,
    timerStatus,
    selectedFont: FONTS.KUMBH_SANS,
    selectedColor: COLORS.ORANGE_RED,
    changeActiveTimer,
    changeTimerStatus,
  };

  return (
    <TimerContext.Provider value={timerContextValue}>
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider, TimerContext };
