import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import { CloseIcon } from '~/components/Icons';
import { useContext } from 'react';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

function LoginForm() {
    const { handleHideLoginModal } = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-form-container')}>
                <h2>Log in to TikTok</h2>
            </div>
            <div className={cx('close-form-btn')} onClick={handleHideLoginModal}>
                <CloseIcon />
            </div>
        </div>
    );
}

export default LoginForm;
