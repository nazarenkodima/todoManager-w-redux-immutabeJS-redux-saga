//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

//Instruments
import { api } from '../../../REST';
import { todoActions } from '../actions';
import { uiActions } from '../../ui/actions';
import { fetchTodos } from '../saga/workers';

describe('fetchTodos saga:', () => {
    test('should complete 200 status scenario', async () => {
        await expectSaga(fetchTodos)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.fetch), __.fetchResponseSuccess]])
            .put(todoActions.fillTodos(__.todos))
            .put(uiActions.stopFetching())
            .run();
    });

    test('should complete 400 status scenario', async () => {
        await expectSaga(fetchTodos)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.fetch), __.fetchResponseFail400, __.fetchResponseFail400.json]])
            .put(uiActions.emitError(__.error, 'fetchTodos worker'))
            .put(uiActions.stopFetching())
            .run();
    });
});
