//Core
import { call, all } from 'redux-saga/effects';

//Watchers
import { watchTodos } from '../bus/todos/saga/watchers';

export function* rootSaga () {
    yield all([call(watchTodos)]);

}
