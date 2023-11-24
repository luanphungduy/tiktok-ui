import { createContext, useState } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [modalVisible, setModalVisible] = useState(false);

    const [formType, setFormType] = useState('');

    const handleShowLoginModal = () => {
        setModalVisible(true);
        setFormType('login');
    };

    const handleHideLoginModal = () => {
        setModalVisible(false);
        setFormType('');
    };

    const handleShowLogoutModal = () => {
        setModalVisible(true);
        setFormType('logout');
    };

    const handleHideLogoutModal = () => {
        setModalVisible(false);
        setFormType('');
    };

    const value = {
        modalVisible,
        formType,
        handleShowLoginModal,
        handleHideLoginModal,
        handleShowLogoutModal,
        handleHideLogoutModal,
    };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export { ModalContext };
export default ModalProvider;
