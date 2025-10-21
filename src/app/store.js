import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from '../features/Auth/userSlice';
import resultsSliceReducer from '../features/results/resultsSlice';

export  const store = configureStore({
    reducer: {
        user: userSliceReducer,
        results: resultsSliceReducer,
        
    }
})