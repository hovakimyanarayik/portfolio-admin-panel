import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        changeUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { changeUser } = authSlice.actions

export default authSlice.reducer