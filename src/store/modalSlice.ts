import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSettingsModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeSettingsModalState: (state) => {
      state.isSettingsModalOpen = !state.isSettingsModalOpen;
    },
  },
});

export const { changeSettingsModalState } = modalSlice.actions;
export default modalSlice.reducer;
