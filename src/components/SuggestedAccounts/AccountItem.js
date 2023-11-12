import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
// import { CheckIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem({ avatar, username, fullname }) {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src={avatar.path} alt="avt-img" />
            <div className={cx('item-info')}>
                <p className={cx('username')}>
                    <strong>{username}</strong>
                    {/* <CheckIcon className={cx('check')} /> */}
                </p>
                <p className={cx('fullname')}>{fullname}</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
};

export default AccountItem;
