
import {createSlice} from '@reduxjs/toolkit';

const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        results: {}
    },
    reducers: {
        addResults: (state, action) => {
            state.results = action.payload;

        },
        removeResults: (state) => {
            state.results = {};
        }
    }
})

export const {addResults, removeResults} = resultsSlice.actions;

export const getResults = (state) => state.results.results;

export default resultsSlice.reducer;