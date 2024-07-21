import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { setLoginData } from '~/redux/state/loginSlice';
import { handleHideForm } from '~/redux/state/modalSlice';
import styles from './LogoutForm.module.scss';
import Button from '~/components/Button';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

function LogoutForm() {
    const dispatch = useDispatch();

    const fetchApi = async () => {
        await authService.logout();
        localStorage.removeItem('token');
        dispatch(setLoginData(null));
        dispatch(handleHideForm());
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Are you sure you want to log out?</div>
            <div className={cx('action-btn')}>
                <Button text className={cx('cancel-logout-btn')} onClick={() => dispatch(handleHideForm())}>
                    Cancel
                </Button>
                <Button outline className={cx('logout-btn')} onClick={fetchApi}>
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default LogoutForm;
