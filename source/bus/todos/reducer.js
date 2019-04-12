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

        case types.UPDATE_TODO:
            return state.update(state.findIndex((todo) => todo.get('id') === action.payload.id),
                (todo) => todo.set('completed', !todo.get('completed')));

        case types.COMPLETE_ALL_TODO:
            return state.map((todo) => todo.set('completed', true));

        default:
            return state;
    }
};
