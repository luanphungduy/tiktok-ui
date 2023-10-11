import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9090525af8ba921a4e5946cd218c8bd7.jpeg?x-expires=1697014800&x-signature=RpImAtL%2FVEg0ueRVs8BufthOJ7w%3D',
                }}
                username="xmasterno1"
                fullname="Duy Luan"
            />
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9090525af8ba921a4e5946cd218c8bd7.jpeg?x-expires=1697014800&x-signature=RpImAtL%2FVEg0ueRVs8BufthOJ7w%3D',
                }}
                username="xmasterno1"
                fullname="Duy Luan"
            />
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9090525af8ba921a4e5946cd218c8bd7.jpeg?x-expires=1697014800&x-signature=RpImAtL%2FVEg0ueRVs8BufthOJ7w%3D',
                }}
                username="xmasterno1"
                fullname="Duy Luan"
            />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
