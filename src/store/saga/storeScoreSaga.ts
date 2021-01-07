import { put, takeLatest, select } from 'redux-saga/effects'
import ActionsType from '../types';
import { setScores, failed, resetEndGame } from '../actions'
import { selectScore } from '../selctors'
import { ActionProp } from '../../utils/interfaces'
const Realm = require('realm');

const SCHEME_NAME = 'Score'

const Scores = {
  name: SCHEME_NAME,
  properties: {
    name: 'string',
    score: { type: 'int', default: 0 }
  }
};

export function* storeScoreSagaWatcher() {
  yield takeLatest(ActionsType.STORE_SCORE, storeScoreSaga);
}

function* storeScoreSaga(action: ActionProp) {
  try {
    const score = yield select(selectScore);
    const realm = yield Realm.open({ schema: [Scores] })
    realm.write(() => {
      const userScore = realm.create(SCHEME_NAME, {
        name: action.payload,
        score: score,
      });
    });
    const scores = yield realm.objects(SCHEME_NAME).toJSON()
    .sort((a: number, b: number) => b - a).slice(0, 10);
    yield realm.close();
    yield put(resetEndGame());
    yield put(setScores(scores));
  } catch (e) {
    yield put(failed(e.message));
  }
}
