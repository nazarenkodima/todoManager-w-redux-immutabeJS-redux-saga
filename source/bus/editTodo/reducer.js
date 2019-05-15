//Core
import { Map, fromJS } from 'immutable';

import { types } from './types';

const initialState = Map({
    id:         '',
    newMessage: '',
});

export const editTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TODO:
            return state.merge(
                fromJS({
                    id:         action.payload.id,
                    newMessage: action.payload.message,
                })
            );

        case types.UPDATE_EDITED_TODO:
            return state.set('newMessage', action.payload);

        case types.EDIT_CANCEL:
            return initialState;

        default:
            return state;
    }
};
