import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import LoginForm from '../AuthForm/LoginForm';
import LogoutForm from '../AuthForm/LogoutForm';
import { useContext } from 'react';
import { ModalContext } from '../ModalProvider';
const cx = classNames.bind(styles);

function Modal() {
    const { formType } = useContext(ModalContext);
    const formComponent = {
        login: LoginForm,
        logout: LogoutForm,
    };

    const FormElement = formComponent[formType];
    return (
        <div className={cx('wrapper')}>
            <FormElement />
        </div>
    );
}

export default Modal;
