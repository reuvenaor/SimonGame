import { put, takeLatest, select } from 'redux-saga/effects'
import ActionsType from '../types';
import { setUersSeqNum, failed, newGame, endGame } from '../actions'
import { selectSeq, selectUserSeq } from '../selctors'
import { ActionProp } from '../../utils/interfaces'
// import {
//   Player,
// } from '@react-native-community/audio-toolkit';


// const player = new Player('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3')
// player.wakeLock = true
// player.play();


export function* addSeqSagaWatcher() {
  yield takeLatest(ActionsType.ADD_USER_SEQ, addSeqSaga);
}

function* addSeqSaga(action: ActionProp) {
  try {
    yield put(setUersSeqNum(action.payload));
    const seq = yield select(selectSeq);
    const userSeq = yield select(selectUserSeq);
    if (seq.length === userSeq.length) {
      const isIdentical = yield seq.every((val: number, i: number) => val === userSeq[i]);
      if (isIdentical) {
        yield put(newGame())
      } else {
        yield put(endGame())
      }
    }
  } catch (e) {
    yield put(failed(e.message));
  }
}
