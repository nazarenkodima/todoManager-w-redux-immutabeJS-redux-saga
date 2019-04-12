//Core
import { put, apply, select } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { todoActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* completeAllTodo () {
    try {
        yield put(uiActions.startFetching());

        const allTodos = yield select((state) => state.todos);
        const todoCompleted = allTodos.map((todo) => todo.set('completed', true)).toJS();

        const response =  yield apply(api, api.todos.update, [todoCompleted]);
        const { message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todoActions.completeAllTodo());

    } catch (error) {
        yield put(uiActions.emitError(error, 'completeAllTodo worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }

}
