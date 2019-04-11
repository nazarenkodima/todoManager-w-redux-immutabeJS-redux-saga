import { MAIN_URL, TOKEN } from './config';

export const api = {
    todos: {
        fetch () {
            return fetch(`${MAIN_URL}`, {
                method:  'GET',
                headers: {
                    'Authorization': TOKEN,
                },
            });
        },
    },
};
