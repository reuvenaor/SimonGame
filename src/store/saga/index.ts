import {fork} from 'redux-saga/effects'

import {tempSagaWatcher} from './tempSaga';

export default function* rootSaga() {
  yield fork(tempSagaWatcher);
}