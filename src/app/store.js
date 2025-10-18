import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from '../features/Auth/userSlice';

export  const store = configureStore({
    reducer: {
        user: userSliceReducer,
        
    }
})