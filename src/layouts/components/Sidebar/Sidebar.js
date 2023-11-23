import { useState, useEffect } from 'react';
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
// import * as userService from '~/services/userService';
import * as followService from '~/services/followService';

const cx = classNames.bind(styles);

function Sidebar() {
    // const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        // userService
        //     .getSuggested()
        //     .then((data) => {
        //         // console.log(data);
        //         setSuggestedUsers(data);
        //     })
        //     .catch((error) => console.log(error));

        followService
            .getFollowing()
            .then((data) => {
                // console.log(data);
                setFollowingUsers(data);
            })
            .catch((error) => console.log(error));
    }, []);

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
            {/* <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} /> */}
            <SuggestedAccounts label="Following accounts" data={followingUsers} />
            <Footer />
        </aside>
    );
}

export default Sidebar;
