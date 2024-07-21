import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { handleHideForm, setAuthToOptionsRegister, setAuthToOptionsLogin } from '~/redux/state/modalSlice';
import styles from './AuthForm.module.scss';
import { CloseIcon, GoBackIcon } from '~/components/Icons';
import {
    OptionsLoginForm,
    OptionsRegisterForm,
    LoginWithEmailForm,
    LoginWithPhoneForm,
    LoginWithQrForm,
    RegisterWithEmailForm,
    RegisterWithPhoneForm,
} from './index';

const cx = classNames.bind(styles);

function AuthForm() {
    const authType = useSelector((state) => state.modal.authType);
    const dispatch = useDispatch();

    // Render form content
    const authForm = {
        loginWithEmail: LoginWithEmailForm,
        loginWithPhone: LoginWithPhoneForm,
        loginWithQR: LoginWithQrForm,
        optionsLogin: OptionsLoginForm,
        optionsRegister: OptionsRegisterForm,
        registerWithEmail: RegisterWithEmailForm,
        registerWithPhone: RegisterWithPhoneForm,
    };

    const AuthFormElement = authForm[authType];

    // Render Form Header
    const handleRenderTitle = () => {
        switch (authType) {
            case 'optionsLogin':
                return 'Log in to TikTok';
            case 'loginWithQR':
                return 'Log in with QR code';
            case 'loginWithPhone':
            case 'loginWithEmail':
                return 'Log in';
            case 'optionsRegister':
                return 'Sign up for TikTok';
            case 'registerWithPhone':
            case 'registerWithEmail':
                return 'Sign up';
            default:
        }
    };

    // Render Policy
    const handleRenderPolicy = () => {
        switch (authType) {
            case 'optionsLogin':
            case 'optionsRegister':
            case 'registerWithEmail':
            case 'registerWithPhone':
                return true;
            default:
                return false;
        }
    };

    // Render Footer Question: Ex: 'Don't have an account?'  or  'Already have an account?'
    const handleRenderFooterQuestion = () => {
        switch (authType) {
            case 'optionsLogin':
            case 'loginWithQR':
            case 'loginWithPhone':
            case 'loginWithEmail':
                return "Don't have an account?";
            default:
                return 'Already have an account?';
        }
    };

    // Render Footer Button 'Sign up' and 'Log in'(to switch between Options Login and Options Register Form)
    const handleRenderFooterBtn = () => {
        switch (authType) {
            case 'optionsLogin':
            case 'loginWithQR':
            case 'loginWithPhone':
            case 'loginWithEmail':
                return 'Sign up';
            default:
                return 'Sign in';
        }
    };

    // Handle when click Footer Button
    const handleSwitchForm = () => {
        switch (authType) {
            case 'optionsLogin':
            case 'loginWithQR':
            case 'loginWithPhone':
            case 'loginWithEmail':
                dispatch(setAuthToOptionsRegister());
                break;
            default:
                dispatch(setAuthToOptionsLogin());
        }
    };

    // Render Go Back Button (to return Options Login or Options Register Form)
    const handleRenderGoBackBtn = () => {
        switch (authType) {
            case 'loginWithQR':
            case 'loginWithPhone':
            case 'loginWithEmail':
            case 'registerWithPhone':
            case 'registerWithEmail':
                return true;
            default:
                return false;
        }
    };

    // Handle when click Go Back Button
    const handleGoBack = () => {
        switch (authType) {
            case 'loginWithQR':
            case 'loginWithPhone':
            case 'loginWithEmail':
                dispatch(setAuthToOptionsLogin());
                console.log('back to Option Login');
                break;
            case 'registerWithPhone':
            case 'registerWithEmail':
                dispatch(setAuthToOptionsRegister());
                console.log('back to Option Register');
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('scroll-content')}>
                <h2 className={cx('title')}>{handleRenderTitle()}</h2>
                <AuthFormElement />
            </div>

            {handleRenderPolicy() && (
                <div className={cx('policy')}>
                    <p className={cx('policy-description')}>
                        By continuing, you agree to TikTok’s{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.tiktok.com/legal/terms-of-use?lang=en"
                        >
                            Terms of Service
                        </a>{' '}
                        and confirm that you have read TikTok’s{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.tiktok.com/legal/privacy-policy?lang=en"
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            )}

            <div className={cx('footer')}>
                <div>{handleRenderFooterQuestion()}</div>
                <span className={cx('auth-btn')} onClick={handleSwitchForm}>
                    {handleRenderFooterBtn()}
                </span>
            </div>

            {handleRenderGoBackBtn() && (
                <div className={cx('go-back-btn')} onClick={handleGoBack}>
                    <GoBackIcon width="2.4rem" height="2.4rem" />
                </div>
            )}

            <div className={cx('close-form-btn')} onClick={() => dispatch(handleHideForm())}>
                <CloseIcon />
            </div>
        </div>
    );
}

export default AuthForm;
