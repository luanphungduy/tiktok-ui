import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ListScrollVideo.module.scss';
import { getListVideo } from '~/services/videoService';
import VideoItem from '~/layouts/components/VideoItem';

const cx = classNames.bind(styles);

function ListScrollVideo({ type }) {
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);
    const [listVideo, setListVideo] = useState([]);
    console.log(listVideo);

    useEffect(() => {
        const fetchApi = async () => {
            let result;
            result = await getListVideo(type, page);
            setListVideo((prev) => [...prev, ...result]);
        };

        fetchApi();
    }, [type, page]);
    return (
        <div className={cx('wrapper')}>
            {listVideo.map((item) => (
                <VideoItem key={item.id} data={item} />
            ))}
        </div>
    );
}

export default ListScrollVideo;
