import { createSlice } from '@reduxjs/toolkit';

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    src: '/logo.png',
  },
});

export default logoSlice.reducer;