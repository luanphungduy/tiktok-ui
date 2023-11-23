import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './MenuItem.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '~/components/ThemeProvider/ThemeProvider';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, isBelongsToSubMenu = false }) {
    const contextTheme = useContext(ThemeContext);

    const { darkTheme, setDarkMode, setLightMode } = contextTheme;

    const classes = cx('menu-item', {
        isBelongsToSubMenu,
        separate: data.separate,
    });

    const toggleTheme = () => {
        if (!darkTheme) {
            setDarkMode();
        } else {
            setLightMode();
        }
        // Logic toggle theme ...
    };

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
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
