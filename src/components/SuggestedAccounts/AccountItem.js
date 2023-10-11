import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ avatar, username, fullname }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview avatar={avatar} username={username} fullname={fullname} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <HeadlessTippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={avatar.path} alt="avt-img" />
                <div className={cx('item-info')}>
                    <p className={cx('username')}>
                        <strong>{username}</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('fullname')}>{fullname}</p>
                </div>
            </div>
        </HeadlessTippy>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
};

export default AccountItem;
