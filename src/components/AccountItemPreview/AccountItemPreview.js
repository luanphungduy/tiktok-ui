import classNames from 'classnames/bind';
import styles from './AccountItemPreview.module.scss';
import Button from '../Button';
import { CheckIcon } from '../Icons';
import * as userService from '~/services/userService';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountItemPreview({ data }) {
    const [infoUser, setInfoUser] = useState([]);

    useEffect(() => {
        userService
            .getAnUser(data.nickname)
            .then((dataOfAnUser) => {
                // console.log(dataOfAnUser);
                setInfoUser(dataOfAnUser);
            })
            .catch((error) => console.log(error));
    }, [data.nickname]);

    const buttonProps = data.is_followed ? { text: true } : { outline: true };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <Button className={cx('follow-btn')} {...buttonProps}>
                    {data.is_followed ? 'Following' : 'Follow'}
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('username')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <CheckIcon className={cx('check')} />}
                </p>
                <p className={cx('fullname')}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analystics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
            <div className={cx('bio')}>{infoUser.bio}</div>
        </div>
    );
}

export default AccountItemPreview;
