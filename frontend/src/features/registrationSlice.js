import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agreedToTerms: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setAgreedToTerms: (state, action) => {
      state.agreedToTerms = action.payload;
    },
  },
});

export const { setAgreedToTerms } = registrationSlice.actions;
export default registrationSlice.reducer;
