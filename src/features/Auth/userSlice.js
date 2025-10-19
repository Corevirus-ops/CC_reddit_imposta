import {createSlice} from '@reduxjs/toolkit';



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            isLoggedIn: false,
            userName: '',
            userIcon: '',
            accessToken: ''
        }
    },
    reducers: {
        logIn: (state, action) => {
            state.user = {
                isLoggedIn: true,
                userName: action.payload.userName,
                userIcon: action.payload.image,
                accessToken: action.payload.token, 
            }
        },
        logOut: (state) => {
            state.user = {
                isLoggedIn: false,
                userName: '',
                userIcon: '',
                accessToken: '',
            }
        }
    }
})

export const {logIn, logOut} = userSlice.actions;

export const getUser = (state) => state.user.user;

export default userSlice.reducer;

