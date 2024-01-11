import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAttemptInfo {
    isCorrectUsersAmount: number,
    isCorrectPercent: number
}

export interface ISubmissionResult {
    submissionResult: boolean
}

export interface AssignmentSliceState {
    attemptsInfo: IAttemptInfo | null,
    submission: ISubmissionResult | null,
    resultType: 'correct' | 'incorrect' | null,
    isLoading: boolean
}

const initialState: AssignmentSliceState = {
    attemptsInfo: null,
    submission: null,
    resultType: null,
    isLoading: false
}

export const getCountOfAssignments = createAsyncThunk<IAttemptInfo, string>(
    'assignment/getCountOfAssignments',
    async (taskId, {rejectWithValue}) => {
        try {
            const res = await fetch(`/api/assignments/attempts/info/${taskId}`);
            return res.json();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const submitAnAssignment = createAsyncThunk<ISubmissionResult, {
    code: string,
    userId: string,
    lessonId: string
}>(
    'assignment/submitAnAssignment',
    async ({code, userId, lessonId}, {rejectWithValue, dispatch}) => {
        try {
            const dataRow = {
                code,
                userId
            }

            const res = await fetch(`/api/submissions/${lessonId}`, {
                method: 'POST',
                body: JSON.stringify(dataRow),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            await dispatch(getCountOfAssignments(lessonId));

            return res.json();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        resetAssignment: (state) => {
            state.submission = null;
            state.resultType = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCountOfAssignments.pending, (state) => {
                state.isLoading = true;
                state.attemptsInfo = null;
            })
            .addCase(getCountOfAssignments.fulfilled, (state, action: PayloadAction<IAttemptInfo>) => {
                state.attemptsInfo = action.payload;
                state.isLoading = false;
            })
            .addCase(getCountOfAssignments.rejected, (state) => {
                state.attemptsInfo = null;
                state.isLoading = false;
            })

        builder
            .addCase(submitAnAssignment.pending, (state) => {
                state.isLoading = true;
                state.submission = null;
            })
            .addCase(submitAnAssignment.fulfilled, (state, action: PayloadAction<ISubmissionResult>) => {
                state.submission = action.payload;
                state.resultType = action.payload.submissionResult ? 'correct' : 'incorrect';
                console.log(action.payload);
                state.isLoading = false;
            })
            .addCase(submitAnAssignment.rejected, (state) => {
                state.submission = null;
                state.isLoading = false;
            })
    }
})

export const {resetAssignment} = assignmentSlice.actions;

export default assignmentSlice.reducer;
