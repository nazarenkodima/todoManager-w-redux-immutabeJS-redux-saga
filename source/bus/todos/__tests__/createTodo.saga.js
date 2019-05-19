//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

//Instruments
import { api } from '../../../REST';
import { todoActions } from '../actions';
import { uiActions } from '../../ui/actions';
import { createTodo } from '../saga/workers';

const action = todoActions.createTodoAsync(__.message);

describe('createTodo saga:', () => {
    test('should complete 200 status scenario', async () => {
        await expectSaga(createTodo, action)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.create, [__.message]), __.fetchResponseSuccess, __.fetchResponseSuccess.json]])
            .put(todoActions.createTodo([__.message]))
            .put(uiActions.stopFetching())
            .run();
    });

    test('should complete 400 status scenario', async () => {
        await expectSaga(createTodo, action)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.create, [__.message]), __.fetchResponseFail400, __.fetchResponseFail400.json]])
            // .put(uiActions.emitError(__.error, 'createTodo worker'))
            .put(uiActions.stopFetching())
            .run();
    });

});
