import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApi } from '~/redux/state/loginSlice';
import styles from './LoginWithEmailForm.module.scss';
import { EyeIcon, HiddenEyeIcon, WarningIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function LoginWithEmailForm() {
    const showError = useSelector((state) => state.login.showError);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typePassword, setTypePassword] = useState('password');
    const [validPassword, setValidPassword] = useState(true);

    const passwordRegex = /^(?:(?![\s\u0080-\u00FF]).)*$/;

    const disabledSubmitButton = !validPassword || password.trim() === '' || email.trim() === '';

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(fetchApi({ email, password }));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !disabledSubmitButton) {
            e.preventDefault();
            handleSubmit();
        }
    };

    useEffect(() => {
        if (passwordRegex.test(password)) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    }, [password]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-label-container')}>
                <span>Email or username</span>
                <span className={cx('switch-btn')}>Log in with phone</span>
            </div>
            <div className={cx('form-input-container')}>
                <div className={cx('form-input')}>
                    <input
                        placeholder="Email or username"
                        type="email"
                        value={email}
                        onKeyDown={handleKeyPress}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className={cx('form-input')}>
                    <input
                        placeholder="Password"
                        type={typePassword}
                        value={password}
                        onKeyDown={handleKeyPress}
                        onChange={handleChangePassword}
                    />
                    <div className={cx('box-icon')}>
                        {showError && (
                            <span className={cx('wrong-info-icon')}>
                                <WarningIcon />
                            </span>
                        )}
                        {typePassword === 'password' ? (
                            <span onClick={() => setTypePassword('text')} className={cx('hide-password-btn')}>
                                <HiddenEyeIcon />
                            </span>
                        ) : (
                            <span onClick={() => setTypePassword('password')} className={cx('hide-password-btn')}>
                                <EyeIcon />
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {showError && <div className={cx('invalid')}>Enter verification information</div>}
            {!validPassword && <div className={cx('invalid')}>Invalid special character</div>}
            <div className={cx('forgot-password')}>Forgot password?</div>
            <Button disabled={disabledSubmitButton} primary className={cx('login-btn')} onClick={handleSubmit}>
                Log in
            </Button>
        </div>
    );
}

export default LoginWithEmailForm;
/*

    - chưa gửi data: onchange input password -> set invalid -> set primary or disable
        + disable

    - sau khi gửi data: -> set wrongInfo
        + success 
        + ko success == wrong info 
            --> input:  outline color: var(--primary)
                        text: enter verification information
                        icon: warning icon


                       
*/
