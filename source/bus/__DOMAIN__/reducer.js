//Core
import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({});

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TYPE:
            return state;

        default:
            return state;
    }
};
