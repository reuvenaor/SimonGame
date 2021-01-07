import ActionsType from '../types';

export function addSeqNum () {
  return { type: ActionsType.SET_SEQ}
}

export function addUserSeq (id: number) {
  return { type: ActionsType.ADD_USER_SEQ , payload: id}
}

export function setUersSeqNum (id: number) {
  return { type: ActionsType.SET_USER_SEQ , payload: id}
}

export function setCurrent (id: number) {
  return { type: ActionsType.SET_CURRENT, payload: id}
}

export function runSequence () {
  return { type: ActionsType.RUN_SEQ}
}

export function isRuningSequence () {
  return { type: ActionsType.SET_IS_RUN}
}

export function failed (msg: string) {
  return { type: ActionsType.FAILED, payload:  msg}
}

export function newGame () {
  return { type: ActionsType.NEW_GAME}
}

export function endGame () {
  return { type: ActionsType.END_GAME}
}
 
export function storeScore (name: string) {
  return { type: ActionsType.STORE_SCORE, payload: name}
}

export function setScores (scores: Array<any>) {
  return { type: ActionsType.SET_SCORES, payload: scores}
}

export function resetEndGame () {
  return {type: ActionsType.RESET_END}
}
