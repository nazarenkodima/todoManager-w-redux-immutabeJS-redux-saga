//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { todoActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createTodo ({ payload: todo }) {
    try {
        yield put(uiActions.startFetching());
        const response =  yield apply(api, api.todos.create, [todo]);
        const { data : message, messageError } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(messageError);
        }

        yield put(todoActions.createTodo(message));

    } catch (error) {
        yield put(uiActions.emitError(error, 'createTodo worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }

}
