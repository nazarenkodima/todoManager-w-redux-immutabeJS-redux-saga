
//Actions
import { types } from './types';

export const todoActions = {
    //Sync
    fillTodos: (todos) => {
        return {
            type:    types.FILL_TODOS,
            payload: todos,
        };
    },
    //Async
    fetchTodosAsync: () => {
        return {
            type: types.FETCH_TODOS_ASYNC,
        };
    },
}
;
