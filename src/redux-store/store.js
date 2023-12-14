import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '~/state/themeSlice';
import modalReducer from '~/state/modalSlice';
import loginReducer from '~/state/loginSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
        login: loginReducer,
    },
});
