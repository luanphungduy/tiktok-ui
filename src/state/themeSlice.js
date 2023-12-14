import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkTheme: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.darkTheme = true;
            document.documentElement.setAttribute('data-theme', 'dark');
        },
        setLightMode: (state) => {
            state.darkTheme = false;
            document.documentElement.setAttribute('data-theme', 'light');
        },
    },
});

export const { setDarkMode, setLightMode } = themeSlice.actions;

export default themeSlice.reducer;
