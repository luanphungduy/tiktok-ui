import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3e77387846b675766d2c08c27277580a.jpeg?x-expires=1698393600&x-signature=HFl75cmLzo1YrGOtn4pOd2QzlUw%3D',
                }}
                username="phatphap.tinhtam"
                fullname="Tịnh Tâm"
            />
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/0eb88280d8837066c823708ab0175c03~c5_100x100.jpeg?x-expires=1698393600&x-signature=qV32ZsZDZ4XO%2BUHAU7ZfLvA9oxA%3D',
                }}
                username="chuyencua_wang"
                fullname="Híp🪂"
            />
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6996944669162602522.jpeg?x-expires=1698393600&x-signature=sI%2Fc7tc0WqxJa%2BtkZFNPhwyAwig%3D',
                }}
                username="thanhphung1972"
                fullname="thanhphung1972"
            />
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cb74fe82d325955ed732602f784fb617~c5_100x100.jpeg?x-expires=1698393600&x-signature=OAVruHvljO2tCSsFBoRpihfxOY4%3D',
                }}
                username="189chanh"
                fullname="Phùng Thị Thu Hường"
            />
            <AccountItem
                avatar={{
                    path: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/50a2f85729d519f578a2b61eb5c82d4d.jpeg?x-expires=1698393600&x-signature=AgymZZvm7hIV9pbiJnPow85C6fI%3D',
                }}
                username="duythanh2506"
                fullname="_DThanhz06_"
            />
            <button className={cx('more-btn')}>See less</button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
