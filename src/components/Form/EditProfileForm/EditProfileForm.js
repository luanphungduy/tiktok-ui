import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { handleHideForm } from '~/redux/state/modalSlice';
import styles from './EditProfileForm.module.scss';
import { CloseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function EditProfileForm() {
    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper')}>
            <h2>Edit profile</h2>
            <div className={cx('close-form-btn')} onClick={() => dispatch(handleHideForm())}>
                <CloseIcon />
            </div>
        </div>
    );
}

export default EditProfileForm;
