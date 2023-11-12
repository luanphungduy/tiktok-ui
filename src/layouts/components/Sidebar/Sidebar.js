import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
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

const cx = classNames.bind(styles);

function Sidebar() {
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
                    icon={<UserIcon width="2.4rem" height="2.4rem" />}
                    activeIcon={<UserActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
