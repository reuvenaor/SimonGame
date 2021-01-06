import {fork} from 'redux-saga/effects'

import {runSeqSagaWatcher} from './runSeqSaga';

export default function* rootSaga() {
  yield fork(runSeqSagaWatcher);
}