import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getProjects = createAsyncThunk(
    'projects/getProjects',
    async function() {
        const projectsCollectionRef = collection(db, "projects");
        try {
            const data = await getDocs(projectsCollectionRef);
            return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        } catch (error) {
            console.log(error.message);
        }
    }
)

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        isLoading: true,
        error: null
    },
     reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload
        },
        startLoading: (state) => {
            state.isLoading = true
        },
        endLoading: (state) => {
            state.isLoading = false
        }
     },
     extraReducers: builder => {
        builder
            .addCase(getProjects.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.projects = action.payload
                state.isLoading = false
            })
            .addCase(getProjects.rejected, (state, action) => {
                // set anel error
                // hoooki meji stati errory berel stex u stei erroric kaxvac error handler sarqel
            })
     }
})

export const { setProjects, startLoading, endLoading } = projectsSlice.actions

export default projectsSlice.reducer