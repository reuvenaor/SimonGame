import { delay, put, takeLatest, select, } from 'redux-saga/effects'
import ActionsType from '../types';
import { setCurrent, failed, isRuningSequence } from '../actions'
import {selectSeq} from '../selctors'


export function* runSeqSagaWatcher() {
  yield takeLatest(ActionsType.RUN_SEQ, runSeqSaga);
}

function* runSeqSaga() {
  try {
      const seq = yield select(selectSeq)
      yield put(isRuningSequence());
      for (const [idx, val] of seq.entries()) {
        yield put(setCurrent(val));
        yield delay(1000)
        if (idx === seq.length-1) {
          console.log('seq.length',seq.length)
          yield put(isRuningSequence());
        }
      }
  } catch (e) {
    yield put(failed(e.message));
  }
}
