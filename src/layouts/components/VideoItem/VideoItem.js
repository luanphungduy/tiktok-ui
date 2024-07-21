import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { CommentIcon, FavouriteSolidIcon, HeartIcon, MusicIcon, ShareIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            {!data.user.is_followed && (
                <Button outline className={cx('follow-btn')}>
                    Follow
                </Button>
            )}
            <Image src={data.user.avatar} alt={data.user.nickname} className={cx('avatar')} />
            <div className={cx('video-info')}>
                <div className={cx('text-content')}>
                    <div className={cx('author-info')}>
                        <h3 className={cx('author-nickname')}>{data.user.nickname}</h3>
                        <h4 className={cx('author-fullname')}>{data.user.first_name + ' ' + data.user.last_name}</h4>
                    </div>
                    <div className={cx('video-description')}>{data.description}</div>
                    <div className={cx('video-music')}>
                        {data.music !== '' && (
                            <div>
                                <MusicIcon className={cx('music-icon')} />
                                {data.music}
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('video-content')}>
                    <div className={cx('video-card')}>
                        <video width="490" controls>
                            <source src={data.file_url} type={data.meta.mime_type} />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={cx('video-interaction')}>
                        <div className={cx('interaction-item')}>
                            <span className={cx('item-icon')}>
                                <HeartIcon />
                            </span>
                            <strong>{data.likes_count}</strong>
                        </div>
                        <div className={cx('interaction-item')}>
                            <span className={cx('item-icon')}>
                                <CommentIcon />
                            </span>
                            <strong>{data.comments_count}</strong>
                        </div>
                        <div className={cx('interaction-item')}>
                            <span className={cx('item-icon')}>
                                <FavouriteSolidIcon />
                            </span>
                            <strong>0</strong>
                        </div>
                        <div className={cx('interaction-item')}>
                            <span className={cx('item-icon')}>
                                <ShareIcon />
                            </span>
                            <strong>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
