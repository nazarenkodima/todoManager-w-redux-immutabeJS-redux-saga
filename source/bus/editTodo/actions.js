
//Actions
import { types } from './types';

export const editActions = {
    editTodo: (id, message) => {
        return {
            type:    types.EDIT_TODO,
            payload: { id, message },

        };
    },
    updateEditedTodo: (message) => {
        return {
            type:    types.UPDATE_EDITED_TODO,
            payload: message,
        };
    },
    editCancel: () => {
        return {
            type: types.EDIT_CANCEL,
        };
    },
};
