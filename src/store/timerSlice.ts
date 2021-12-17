import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { COLORS, FONTS, TIMERS, TIMER_STATUS } from '../constants';

type initialStateType = {
  activeTimer: string;
  timerNotification: null | string;
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
  timerStatus: string;
  selectedFont: string;
  selectedColor: string;
};

const initialState: initialStateType = {
  activeTimer: TIMERS.POMODORO,
  timerNotification: null,
  pomodoroMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  timerStatus: TIMER_STATUS.PAUSED,
  selectedFont: FONTS.KUMBH_SANS,
  selectedColor: COLORS.ORANGE_RED,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeActiveTimer: (state, action: PayloadAction<string>) => {
      const { payload: newActiveTimer } = action;
      if (state.timerStatus === TIMER_STATUS.FINISHED)
        state.activeTimer = newActiveTimer;
      else
        state.timerNotification =
          'You have to consume your timer before switching';
    },
    changeTimerStatus: (state, action: PayloadAction<string | undefined>) => {
      const { payload: newTimerStatus } = action;
      if (newTimerStatus) state.timerStatus = newTimerStatus;
      else {
        if (state.timerStatus === TIMER_STATUS.PAUSED)
          state.timerStatus = TIMER_STATUS.COUNTING;
        else if (state.timerStatus === TIMER_STATUS.COUNTING)
          state.timerStatus = TIMER_STATUS.PAUSED;
      }
    },
    resetTimerNotification: (state) => {
      state.timerNotification = null;
    },
  },
});

export const { changeActiveTimer, changeTimerStatus, resetTimerNotification } =
  timerSlice.actions;
export default timerSlice.reducer;
