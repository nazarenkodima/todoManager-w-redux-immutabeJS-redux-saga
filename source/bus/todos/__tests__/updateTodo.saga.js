//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

//Instruments
import { api } from '../../../REST';
import { todoActions } from '../actions';
import { uiActions } from '../../ui/actions';
import { updateTodo } from '../saga/workers';

const action = todoActions.updateTodoAsync(__.message);

describe('createTodo saga:', () => {
    test('should complete 200 status scenario', async () => {
        await expectSaga(updateTodo, action)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.update, [__.message]), __.fetchResponseSuccess, __.fetchResponseSuccess.json]])
            .put(todoActions.updateTodo(__.message))
            .put(uiActions.stopFetching())
            .run();
    });

    test('should complete 400 status scenario', async () => {
        await expectSaga(updateTodo, action)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.update, [__.message]), __.fetchResponseFail400, __.fetchResponseFail400.json]])
            .put(uiActions.stopFetching())
            .run();
    });

});
