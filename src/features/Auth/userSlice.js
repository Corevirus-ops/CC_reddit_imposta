import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            isLoggedIn: false,
            userName: '',
            userIcon: ''
            
        }
    },
    reducers: {
        logIn: (state, action) => {
            state.user = {
                isLoggedIn: true,
                userName: action.payload,
                userIcon: 'loggedInUser.png'
            }
        },
        logOut: (state) => {
            state.user = {
                isLoggedIn: false,
                userName: '',
                userIcon: ''
            }
        }
    }
})

export const {logIn, logOut} = userSlice.actions;

export const getUser = (state) => state.user.user;

export default userSlice.reducer;

