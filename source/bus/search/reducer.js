//Core
import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
    searchTodo: '',
});

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TODO:
            return state.set('searchTodo', action.payload);

        default:
            return state;
    }
};
