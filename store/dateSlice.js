import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

const dateSlice = createSlice({
    name: 'date',
    initialState: {
        date: moment().valueOf(),
    },
    reducers: {
        setCurrentDate: (state, action) => {
            state.date = action.payload;
          },      
    },
});

export const { setCurrentDate } = dateSlice.actions;
export default dateSlice.reducer;