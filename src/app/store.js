import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from '../components/Auth/userSlice';

export  const store = configureStore({
    reducer: {
        user: userSliceReducer,
        
    }
})