import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalVisible: false,
    formType: '',
    authType: 'optionsLogin',
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleShowAuthForm: (state) => {
            state.modalVisible = true;
            state.formType = 'auth';
            console.log('rerender after option log in');
        },
        handleShowEditProfileForm: (state) => {
            state.modalVisible = true;
            state.formType = 'editProfile';
            console.log('rerender after edit profile');
        },
        handleShowLogoutForm: (state) => {
            state.modalVisible = true;
            state.formType = 'logout';
            console.log('rerender after logout');
        },
        handleHideForm: (state) => {
            state.modalVisible = false;
            state.formType = '';
            state.authType = 'optionsLogin';
            console.log('rerender after hide form');
        },
        // auth Form
        setAuthToLoginWithQR: (state) => {
            state.authType = 'loginWithQR';
        },
        setAuthToOptionsLogin: (state) => {
            state.authType = 'optionsLogin';
            console.log('rerender after option log in');
        },
        setAuthToLoginWithPhone: (state) => {
            state.authType = 'loginWithPhone';
        },
        setAuthToLoginWithEmail: (state) => {
            state.authType = 'loginWithEmail';
        },
        setAuthToOptionsRegister: (state) => {
            state.authType = 'optionsRegister';
            console.log('rerender after option register');
        },
        setAuthToRegisterWithPhone: (state) => {
            state.authType = 'registerWithPhone';
        },
        setAuthToRegisterWithEmail: (state) => {
            state.authType = 'registerWithEmail';
        },
    },
});

export const {
    setAuthType,
    handleShowAuthForm,
    handleShowEditProfileForm,
    handleShowLogoutForm,
    handleHideForm,
    setAuthToLoginWithQR,
    setAuthToOptionsLogin,
    setAuthToLoginWithPhone,
    setAuthToLoginWithEmail,
    setAuthToOptionsRegister,
    setAuthToRegisterWithPhone,
    setAuthToRegisterWithEmail,
} = modalSlice.actions;

export default modalSlice.reducer;
