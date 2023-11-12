import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import config from '~/config';
import Search from '../Search';
import images from '~/assets/images';
import styles from './Header.module.scss';
import {
    UploadIcon,
    MessageIcon,
    InboxIcon,
    MoreVerticalIcon,
    UserIcon,
    LightBulbIcon,
    LanguagesIcon,
    KeyboardIcon,
    SavedIcon,
    TiktokCoinIcon,
    GraphIcon,
    SettingsIcon,
    HelpIcon,
    MoonIcon,
    ExitIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LightBulbIcon />,
        title: 'LIVE Creator Hub',
        to: '/live/creators',
    },
    {
        icon: <LanguagesIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    to: '/',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    to: '/',
                },
            ],
        },
        to: '/',
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
        to: '/',
    },
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
        to: '/',
    },
];

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/@xmasterno1',
    },
    {
        icon: <SavedIcon />,
        title: 'Favorites',
        to: '/@xmasterno1',
    },
    {
        icon: <TiktokCoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <GraphIcon />,
        title: 'View Analytics',
        to: '/creator-center/analytics/overview',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,

    {
        icon: <ExitIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo.default} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        // When the user is logged in
                        <>
                            <Button text leftIcon={<UploadIcon />} className={cx('header-upload-btn')}>
                                Upload
                            </Button>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // When the user is not logged in
                        <>
                            <Button text leftIcon={<UploadIcon />} className={cx('header-upload-btn')}>
                                Upload
                            </Button>
                            <Button primary className={cx('header-login-btn')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/9090525af8ba921a4e5946cd218c8bd7.jpeg?x-expires=1698242400&x-signature=ckl%2Fv1n7TIcVnMIQABn4huA%2Brtg%3D"
                                alt="Phung Duy Luan"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/50a2f85729d519f578a2b61eb5c82d4d.jpeg?x-expires=1697014800&x-signature=1MOwMElZ7P5IqW%2Bbk6b6W%2FiK12A%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreVerticalIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
