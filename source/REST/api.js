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
        create (message) {
            return fetch(`${MAIN_URL}`, {
                method:  'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': TOKEN,
                },
                body: JSON.stringify({ message }),
            });
        },
    },
};
