import {createSlice} from "@reduxjs/toolkit";

export interface ITask {
    taskId: string,
    task: string,
    userAttempts: number
}

export interface TaskSliceState {
    taskList: ITask[] | [],
    currentTask: ITask | null,
    isLoading: boolean
}

const initialState: TaskSliceState = {
    taskList: [],
    currentTask: null,
    isLoading: false
}


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export const {} = taskSlice.actions;
export default taskSlice.reducer;
