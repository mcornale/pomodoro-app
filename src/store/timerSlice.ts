import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { COLORS, FONTS, TIMERS, TIMER_STATUS } from '../constants';

type initialStateType = {
  activeTimer: string;
  timerMinutes: number;
  timerSeconds: number;
  timerNotification: null | string;
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
  totalMinutesActiveTimer: number;
  timerStatus: string;
  selectedFont: string;
  selectedColor: string;
};

const initialState: initialStateType = {
  activeTimer: TIMERS.POMODORO.NAME,
  timerMinutes: TIMERS.POMODORO.MINUTES,
  timerSeconds: 0,
  timerNotification: null,
  pomodoroMinutes: TIMERS.POMODORO.MINUTES,
  shortBreakMinutes: TIMERS.SHORT_BREAK.MINUTES,
  longBreakMinutes: TIMERS.LONG_BREAK.MINUTES,
  totalMinutesActiveTimer: TIMERS.POMODORO.MINUTES,
  timerStatus: TIMER_STATUS.PAUSED,
  selectedFont: FONTS.KUMBH_SANS,
  selectedColor: COLORS.ORANGE_RED,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeTimerValues: (state) => {
      if (state.timerSeconds === 0) state.timerMinutes -= 1;

      state.timerSeconds =
        state.timerSeconds === 0 ? 59 : state.timerSeconds - 1;
    },
    changeActiveTimer: (state, action: PayloadAction<string>) => {
      const { payload: newActiveTimer } = action;

      if (state.timerStatus === TIMER_STATUS.COUNTING) {
        state.timerNotification =
          'A timer is running. Pause the timer to change mode';
        return;
      }

      state.activeTimer = newActiveTimer;
      state.timerStatus = TIMER_STATUS.PAUSED;
    },
    updateActiveTimerTotalMinutes: (state) => {
      if (state.timerStatus === TIMER_STATUS.COUNTING) return;

      let choosenMinutes = 0;

      if (state.activeTimer === TIMERS.POMODORO.NAME)
        choosenMinutes = state.pomodoroMinutes;
      if (state.activeTimer === TIMERS.SHORT_BREAK.NAME)
        choosenMinutes = state.shortBreakMinutes;
      if (state.activeTimer === TIMERS.LONG_BREAK.NAME)
        choosenMinutes = state.longBreakMinutes;

      state.totalMinutesActiveTimer = state.timerMinutes = choosenMinutes;
      state.timerSeconds = 0;

      state.timerStatus = TIMER_STATUS.PAUSED;
    },
    changeTimerStatus: (state, action: PayloadAction<string>) => {
      const { payload: newTimerStatus } = action;

      state.timerStatus = newTimerStatus;
    },
    resetTimerNotification: (state) => {
      state.timerNotification = null;
    },
  },
});

export const {
  changeTimerValues,
  changeActiveTimer,
  changeTimerStatus,
  resetTimerNotification,
  updateActiveTimerTotalMinutes,
} = timerSlice.actions;
export default timerSlice.reducer;
