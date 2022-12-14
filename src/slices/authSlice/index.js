import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null
    },
    reducers: {
        changeUser: (state, action) => {
            state.user = action.payload
        },
        startLoading: (state) => {
            state.isLoading = true
            state.error = null
        },
        endLoading: (state) => {
            state.isLoading = false
        },
        setError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { changeUser, startLoading, endLoading, setError } = authSlice.actions

export default authSlice.reducer