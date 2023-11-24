import classNames from 'classnames/bind';
import styles from './LogoutForm.module.scss';
import Button from '~/components/Button';
import { useContext } from 'react';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

function LogoutForm() {
    const { handleHideLogoutModal } = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Are you sure you want to log out?</div>
            <div className={cx('action-btn')}>
                <Button text className={cx('cancel-logout-btn')} onClick={handleHideLogoutModal}>
                    Cancel
                </Button>
                <Button outline className={cx('logout-btn')}>
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default LogoutForm;
