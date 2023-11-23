import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Footer.module.scss';
import { DoorIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('create-effect-btn')}>
                <img className={cx('banner')} src={images.bannerSidebar} alt={'dcm'} />
                <div className={cx('content')}>
                    <DoorIcon className={cx('content-icon')} />
                    <h4 className={cx('content-text')}>Create effects</h4>
                </div>
            </div>
            <div className={cx('info-container', 'container-1')}>
                <span className={cx('link-item')}>About</span>
                <span className={cx('link-item')}>Newsroom</span>
                <span className={cx('link-item')}>Contact</span>
                <span className={cx('link-item')}>Careers</span>
            </div>
            <div className={cx('info-container', 'container-2')}>
                <span className={cx('link-item')}>Tiktok for Good</span>
                <span className={cx('link-item')}>Advertise</span>
                <span className={cx('link-item')}>Developers</span>
                <span className={cx('link-item')}>Transparency</span>
                <span className={cx('link-item')}>TikTok Rewards</span>
                <span className={cx('link-item')}>TikTok Embeds</span>
            </div>
            <div className={cx('info-container', 'container-2')}>
                <span className={cx('link-item')}>Help</span>
                <span className={cx('link-item')}>Safety</span>
                <span className={cx('link-item')}>Terms</span>
                <span className={cx('link-item')}>Privacy</span>
                <span className={cx('link-item')}>Creator Portal</span>
                <span className={cx('link-item')}>Community Guidelines</span>
            </div>
            <span className={cx('copy-right')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;
