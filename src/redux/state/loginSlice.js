import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleHideForm } from './modalSlice';
import * as authService from '~/services/authService';

const initialState = {
    loginData: null,
    showError: false,
};

export const fetchApi = createAsyncThunk('login/fetchApi', async ({ email, password }, { dispatch }) => {
    try {
        const res = await authService.login(email, password);

        if (res) {
            localStorage.setItem('token', res.meta.token);
            setTimeout(() => {
                dispatch(handleHideForm());
            }, 1000);

            return res.data;
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        // Handle errors if needed
        console.error('Login error:', error.message);
        throw error;
    }
});

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginData: (state, action) => {
            state.loginData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.showError = false;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loginData = action.payload;
            })
            .addCase(fetchApi.rejected, (state) => {
                state.showError = true;
            });
    },
});

// console.log(loginSlice);

export const { setLoginData } = loginSlice.actions;

export default loginSlice.reducer;
