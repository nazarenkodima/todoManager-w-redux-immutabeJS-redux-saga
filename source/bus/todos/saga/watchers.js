//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { fetchTodos, createTodo, removeTodo, updateTodo, completeAllTodo } from './workers';

export function* watchFetchTodos () {
    yield takeEvery(types.FETCH_TODOS_ASYNC, fetchTodos);
}

export function* watchCreateTodo () {
    yield takeEvery(types.CREATE_TODO_ASYNC, createTodo);
}

export function* watchRemoveTodo () {
    yield takeEvery(types.REMOVE_TODO_ASYNC, removeTodo);
}

export function* watchUpdateTodo () {
    yield takeEvery(types.UPDATE_TODO_ASYNC, updateTodo);
}

export function* watchCompleteAllTodo () {
    yield takeEvery(types.COMPLETE_ALL_TODO_ASYNC, completeAllTodo);
}

export function* watchTodos () {
    yield all([call(watchFetchTodos), call(watchCreateTodo), call(watchRemoveTodo), call(watchUpdateTodo), call(watchCompleteAllTodo)]);
}
