import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode, setLightMode } from '~/redux/state/themeSlice';
import { handleShowLogoutForm } from '~/redux/state/modalSlice';
import Button from '~/components/Button';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, isBelongsToSubMenu = false }) {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const dispatch = useDispatch();

    const classes = cx('menu-item', {
        isBelongsToSubMenu,
        separate: data.separate,
    });

    const toggleTheme = () => {
        if (!darkTheme) {
            dispatch(setDarkMode());
        } else {
            dispatch(setLightMode());
        }
    };

    const handleOnClick = () => {
        // Giữ lại hành động onClick trước đó (trường hợp này là hiển thị submenu)
        if (onClick) {
            onClick();
        }
        // Thêm các hành động mới
        if (data.title === 'Log out') {
            dispatch(handleShowLogoutForm());
        }
    };

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={handleOnClick}>
            <div className={cx('content-container')}>
                {data.title}
                {data.title === 'Dark mode' && (
                    <button
                        className={cx('switch-theme', { dark: darkTheme })}
                        role="switch"
                        aria-checked={darkTheme}
                        onClick={toggleTheme}
                    >
                        <span className={cx('switch-theme-btn')}></span>
                    </button>
                )}
            </div>
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    isBelongsToSubMenu: PropTypes.bool,
};

export default MenuItem;
