//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { worker } from './workers';

export function* watchWorker () {
    yield takeEvery(types.TYPE, worker);
}

export function* watchAuth () {
    yield all([call(watchWorker)]);
}
