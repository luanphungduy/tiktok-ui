import { useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleShowAuthForm, handleShowEditProfileForm } from '~/redux/state/modalSlice';
import { setLoginData } from '~/redux/state/loginSlice';
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
import * as authService from '~/services/authService';

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
        to: '/',
        separate: true,
    },
];

function Header() {
    console.log('test re-render header');
    const dispatch = useDispatch();
    const loginData = useSelector((state) => state.login.loginData);
    const isLogin = !!localStorage.getItem('token');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await authService.getCurrentUser();
            if (result) {
                dispatch(setLoginData(result));
            }
        };
        if (isLogin) {
            fetchApi();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    {loginData ? (
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
                            <Button
                                text
                                leftIcon={<UploadIcon />}
                                className={cx('header-upload-btn')}
                                onClick={() => dispatch(handleShowEditProfileForm())}
                            >
                                Upload
                            </Button>
                            <Button
                                primary
                                className={cx('header-login-btn')}
                                onClick={() => dispatch(handleShowAuthForm())}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    {loginData && (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <Image
                                className={cx('user-avatar')}
                                src={loginData.avatar}
                                alt={loginData.nickname}
                                // fallback={'dcm'}
                            />
                        </Menu>
                    )}
                    {!loginData && (
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <MoreVerticalIcon />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

// Bug
// Re-render nhiều lần --> tối ưu/
