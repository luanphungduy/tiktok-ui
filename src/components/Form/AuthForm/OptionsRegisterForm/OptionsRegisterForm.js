import { useDispatch } from 'react-redux';
import { setAuthToRegisterWithEmail } from '~/redux/state/modalSlice';
import classNames from 'classnames/bind';
import styles from './OptionsRegisterForm.module.scss';
import {
    FacebookLogo,
    GoogleLogo,
    TwitterLogo,
    UserIcon,
    LineLogo,
    KakaoTalkLogo,
    AppleLogo,
} from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function OptionsRegisterForm() {
    const dispatch = useDispatch();

    const optionsRegisterBtn = [
        {
            title: 'Use phone or email',
            icon: <UserIcon />,
            onClick: () => {
                dispatch(setAuthToRegisterWithEmail());
                console.log('Switch to Register With Email Form');
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
                {optionsRegisterBtn.map((item, index) => (
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

export default OptionsRegisterForm;
