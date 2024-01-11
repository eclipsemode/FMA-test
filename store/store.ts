import {configureStore} from '@reduxjs/toolkit'
import taskSlice from "@/store/features/task/taskSlice";
import assignmentSlice from "@/store/features/assignment/assignmentSlice";

export const store = configureStore({
    reducer: {
        task: taskSlice,
        assignment: assignmentSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
