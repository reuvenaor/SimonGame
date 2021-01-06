import {fork} from 'redux-saga/effects'

import {runSeqSagaWatcher} from './runSeqSaga';
import {addSeqSagaWatcher} from './addSeqSaga';

export default function* rootSaga() {
  yield fork(runSeqSagaWatcher);
  yield fork(addSeqSagaWatcher);
}