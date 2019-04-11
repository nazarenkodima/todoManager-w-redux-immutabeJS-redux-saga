import { types } from './types';

//Actions
export const uiActions = {
    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },

    emitError: (error, meta = null) => {
        return {
            type:    types.EMIT_ERROR,
            payload: error,
            error:   true,
            meta,
        };
    },
};
