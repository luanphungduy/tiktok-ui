import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as followService from '~/services/followService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const followingList = await followService.getFollowing();
            setFollowingUsers(followingList);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            {followingUsers.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <button className={cx('more-btn')}>See more</button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
