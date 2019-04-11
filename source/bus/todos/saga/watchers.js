//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { fetchTodos, createTodo } from './workers';

export function* watchFetchTodos () {
    yield takeEvery(types.FETCH_TODOS_ASYNC, fetchTodos);
}

export function* watchCreateTodo () {
    yield takeEvery(types.CREATE_TODO_ASYNC, createTodo);
}

export function* watchTodos () {
    yield all([call(watchFetchTodos), call(watchCreateTodo)]);
}
