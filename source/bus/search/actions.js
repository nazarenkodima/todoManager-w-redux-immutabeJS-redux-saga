
//Actions
import { types } from './types';

export const searchActions = {
    searchTodo: (text) => {
        return {
            type:    types.SEARCH_TODO,
            payload: text,
        };
    },
}
;
