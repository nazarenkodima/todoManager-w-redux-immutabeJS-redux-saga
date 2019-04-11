//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { todoActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchTodos () {
    try {
        yield put(uiActions.startFetching());
        const response =  yield apply(api, api.todos.fetch);
        const { data : todos, message } = yield apply(response, response.json);

        console.log('todos → ', todos);
        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todoActions.fillTodos(todos));

    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchTodos worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }

}
