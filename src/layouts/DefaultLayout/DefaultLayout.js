import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
// import Modal from '~/components/Modal';

// import { Fragment, useContext } from 'react';
// import { ModalContext } from '~/components/Modal/ModalProvider';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    console.log('test re-render default layout');

    // const { modalVisible } = useContext(ModalContext);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {/* {modalVisible && <Modal />} */}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
