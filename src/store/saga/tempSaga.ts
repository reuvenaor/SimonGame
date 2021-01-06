import { delay, put, takeLatest, select, } from 'redux-saga/effects'
import ActionsType from '../types';


export function* tempSagaWatcher() {
  yield takeLatest(ActionsType.TEMP, tempSaga);
}

function* tempSaga() {

}
