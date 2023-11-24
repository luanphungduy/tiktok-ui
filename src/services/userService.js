import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page = 1, perPage = 5) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
            headers: {
                Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTcwMDEyNDM1MiwiZXhwIjoxNzAyNzE2MzUyLCJuYmYiOjE3MDAxMjQzNTIsImp0aSI6InlWbnVkdjlqSGJvNk4xa2giLCJzdWIiOjY0NTgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.PgPFo4_tA_AG88kn1KI1sgrjTbNuKTHwBsUk5RtYmPk',
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