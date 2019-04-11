//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { todoActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removeTodo ({ payload: postID }) {
    try {
        yield put(uiActions.startFetching());
        const response =  yield apply(api, api.todos.delete, [postID]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(todoActions.removeTodo(postID));

    } catch (error) {
        yield put(uiActions.emitError(error, 'removeTodo worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }

}
