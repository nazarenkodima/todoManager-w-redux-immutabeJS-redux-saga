//Core
import { fromJS, List } from 'immutable';

//Types
import { types } from './types';

const initialState = List();

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TODOS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
