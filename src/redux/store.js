import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '~/redux/state/themeSlice';
import modalReducer from '~/redux/state/modalSlice';
import loginReducer from '~/redux/state/loginSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
        login: loginReducer,
    },
});
