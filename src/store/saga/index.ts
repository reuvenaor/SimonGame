import {fork} from 'redux-saga/effects'

import {runSeqSagaWatcher} from './runSeqSaga';
import {addSeqSagaWatcher} from './addSeqSaga';
import {storeScoreSagaWatcher} from './storeScoreSaga';


export default function* rootSaga() {
  yield fork(runSeqSagaWatcher);
  yield fork(addSeqSagaWatcher);
  yield fork(storeScoreSagaWatcher);
}