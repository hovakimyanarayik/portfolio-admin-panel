import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import projectsReducer from '../slices/projectsSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
})