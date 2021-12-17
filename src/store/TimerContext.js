import { createContext, useState } from 'react';
import { COLORS, FONTS, TIMERS, TIMER_STATUS } from '../constants';

const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const [activeTimer, setActiveTimer] = useState(TIMERS.POMODORO);
  const [timerStatus, setTimerStatus] = useState(TIMER_STATUS.PAUSED);
  const [timerNotification, setTimerNotification] = useState(null);

  const changeActiveTimer = (newActiveTimer) => {
    if (timerStatus === TIMER_STATUS.FINISHED) setActiveTimer(newActiveTimer);
    else {
      setTimerNotification('You have to consume your timer before switching');
    }
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
    timerNotification,
    pomodoroMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 15,
    timerStatus,
    selectedFont: FONTS.KUMBH_SANS,
    selectedColor: COLORS.ORANGE_RED,
    changeActiveTimer,
    changeTimerStatus,
    setTimerNotification,
  };

  return (
    <TimerContext.Provider value={timerContextValue}>
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider, TimerContext };
