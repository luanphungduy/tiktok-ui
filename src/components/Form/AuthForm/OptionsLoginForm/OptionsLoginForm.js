import { useDispatch } from 'react-redux';
import { setAuthToLoginWithEmail, setAuthToLoginWithQR } from '~/redux/state/modalSlice';
import classNames from 'classnames/bind';
import styles from './OptionsLoginForm.module.scss';
import {
    FacebookLogo,
    GoogleLogo,
    TwitterLogo,
    QrIcon,
    UserIcon,
    LineLogo,
    KakaoTalkLogo,
    AppleLogo,
} from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function OptionsLoginForm() {
    const dispatch = useDispatch();

    const optionsLoginBtn = [
        {
            title: 'Use QR code',
            icon: <QrIcon />,
            onClick: () => {
                dispatch(setAuthToLoginWithQR());
                console.log('Switch to Login By QR Code Form');
            },
            disabled: true,
        },
        {
            title: 'Use phone / email / username',
            icon: <UserIcon />,
            onClick: () => {
                dispatch(setAuthToLoginWithEmail());
                console.log('Switch to Login By Email Form');
            },
            disabled: false,
        },
        {
            title: 'Continue with Facebook',
            icon: <FacebookLogo />,
            onClick: () => {},
            disabled: true,
        },
        {
            title: 'Continue with Google',
            icon: <GoogleLogo />,
            onClick: () => {},
            disabled: true,
        },
        {
            title: 'Continue with Twitter',
            icon: <TwitterLogo />,
            onClick: () => {},
            disabled: true,
        },
        {
            title: 'Continue with LINE',
            icon: <LineLogo />,
            onClick: () => {},
            disabled: true,
        },
        {
            title: 'Continue with KakaoTalk',
            icon: <KakaoTalkLogo />,
            onClick: () => {},
            disabled: true,
        },
        {
            title: 'Continue with Apple',
            icon: <AppleLogo />,
            onClick: () => {},
            disabled: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('options-container')}>
                {optionsLoginBtn.map((item, index) => (
                    <Button
                        key={item.title}
                        text
                        leftIcon={item.icon}
                        className={cx('option-item')}
                        onClick={item.onClick}
                        disabled={item.disabled}
                    >
                        <span className={cx('option-title')}>{item.title}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default OptionsLoginForm;
