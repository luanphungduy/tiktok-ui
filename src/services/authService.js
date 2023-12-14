import * as httpRequest from '~/utils/httpRequest';

export const getCurrentUser = async () => {
    try {
        const res = await httpRequest.get('auth/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (email, password) => {
    try {
        const res = await httpRequest.post('auth/login', {
            email,
            password,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const logout = async () => {
    try {
        const res = await httpRequest.post('auth/logout');
        return res;
    } catch (error) {
        console.log(error);
    }
};
