import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
