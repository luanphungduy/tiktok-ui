import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { CheckIcon } from '../Icons';
import AccountItemPreview from '../AccountItemPreview';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountItemPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <HeadlessTippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.first_name} />
                    <div className={cx('item-info')}>
                        <p className={cx('username')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <CheckIcon className={cx('check')} />}
                        </p>
                        <p className={cx('fullname')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
