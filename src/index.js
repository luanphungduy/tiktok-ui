import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { store } from './redux/store';
import Modal from '~/components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <GlobalStyles>
            <App />
        </GlobalStyles>
        <Modal />
    </Provider>,
);

reportWebVitals();
