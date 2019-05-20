//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

//Instruments
import { api } from '../../../REST';
import { todoActions } from '../actions';
import { uiActions } from '../../ui/actions';
import { removeTodo } from '../saga/workers';

const action = todoActions.removeTodoAsync(__.id);

describe('createTodo saga:', () => {
    test('should complete 204 status scenario', async () => {
        await expectSaga(removeTodo, action)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.delete, [__.id]), __.fetchResponseSuccess204]])
            .put(todoActions.removeTodo(__.id))
            .put(uiActions.stopFetching())
            .run();
    });

    test('should complete 400 status scenario', async () => {
        await expectSaga(removeTodo, action)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.delete, [__.id]), __.fetchResponseFail401]])
            .put(uiActions.stopFetching())
            .run();
    });

});
