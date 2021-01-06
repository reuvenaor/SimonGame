import { delay, put, takeLatest, select, call } from 'redux-saga/effects'
import ActionsType from '../types';
import { setUersSeqNum, failed, newGame, endGame } from '../actions'
import { selectSeq, selectUserSeq } from '../selctors'
import {ActionProp} from '../../utils/interfaces'

export function* addSeqSagaWatcher() {
  yield takeLatest(ActionsType.ADD_USER_SEQ, addSeqSaga);
}

function* addSeqSaga(action: ActionProp) {
  try {
    const seq = yield select(selectSeq);
    const userSeq = yield select(selectUserSeq);
    if (seq.length === userSeq.length) {
      const isIdentical = yield seq.every( (val: number, i: number) => val === userSeq[i] );
      console.log('isIdentical', isIdentical)
      if (isIdentical) {
        yield put(newGame())
      } else {
        yield put(endGame())
      }
    } else {
      yield put(setUersSeqNum(action.payload));
    }
  } catch (e) {
  yield put(failed(e.message));
}
}
