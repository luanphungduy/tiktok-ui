import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import Footer from './Footer';
import {
    HomeIcon,
    UsersGroupIcon,
    LiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    UsersGroupActiveIcon,
    LiveActiveIcon,
    ExploreActiveIcon,
    UserIcon,
    UserActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    console.log('test re-render sidebar');
    const loginData = useSelector((state) => state.login.loginData);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UsersGroupIcon />}
                    activeIcon={<UsersGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={<UserIcon width="2.4rem" height="2.4rem" className={cx('add-padding')} />}
                    activeIcon={<UserActiveIcon className={cx('add-padding')} />}
                />
            </Menu>

            {loginData ? (
                <SuggestedAccounts label="Following accounts" />
            ) : (
                <div className={cx('login-container')}>
                    <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button outline className={cx('login-btn')}>
                        Log in
                    </Button>
                </div>
            )}
            <Footer />
        </aside>
    );
}

export default Sidebar;
