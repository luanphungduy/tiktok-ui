import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page = 1, perPage = 5) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAnUser = async (nickname) => {
    try {
        const res = await httpRequest.get('users/@' + nickname, {});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
