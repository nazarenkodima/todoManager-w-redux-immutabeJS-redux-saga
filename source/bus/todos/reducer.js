//Core
import { fromJS, List } from 'immutable';

//Types
import { types } from './types';

const initialState = List();

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TODOS:
            return fromJS(action.payload);

        case types.CREATE_TODO:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_TODO:
            return state.filter((todo) => todo.get('id') !== action.payload);

        default:
            return state;
    }
};
