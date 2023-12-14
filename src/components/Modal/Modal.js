import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import styles from './Modal.module.scss';
import { AuthForm, EditProfileForm, LogoutForm } from '~/components/Form';
const cx = classNames.bind(styles);

function Modal() {
    const modalVisible = useSelector((state) => state.modal.modalVisible);

    const formType = useSelector((state) => state.modal.formType);
    const formComponent = {
        auth: AuthForm,
        logout: LogoutForm,
        editProfile: EditProfileForm,
    };

    const FormElement = formComponent[formType];
    if (modalVisible)
        return (
            <div className={cx('wrapper')}>
                <FormElement />
            </div>
        );
    return <></>;
}

export default Modal;
