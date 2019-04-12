//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { todoActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* updateTodo ({ payload: todo }) {
    try {
        yield put(uiActions.startFetching());
        const response =  yield apply(api, api.todos.update, [todo]);

        if (response.status !== 200) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(todoActions.updateTodo(todo));

    } catch (error) {
        yield put(uiActions.emitError(error, 'updateTodo worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }

}
