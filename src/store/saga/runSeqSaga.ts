import { delay, put, takeLatest, select, } from 'redux-saga/effects'
import ActionsType from '../types';
import { setCurrent, failed } from '../actions'
import {selectSeq} from '../selctors'


export function* runSeqSagaWatcher() {
  yield takeLatest(ActionsType.RUN_SEQ, runSeqSaga);
}

function* runSeqSaga() {
  try {
      const seq = yield select(selectSeq)
      for (let i of seq) {
        yield put(setCurrent(i));
        yield delay(1000)
      }
  } catch (e) {
    yield put(failed(e.message));
  }
}
