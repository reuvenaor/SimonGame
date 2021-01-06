import ActionsType from '../types';


export function addSeqNum () {
  return { type: ActionsType.SET_SEQ}
}

export function addUersSeqNum (id: number) {
  return { type: ActionsType.ADD_USER_SEQ , payload: id}
}

export function setCurrent (id: number) {
  return { type: ActionsType.SET_CURRENT, payload: id}
}

export function runSequence () {
  return { type: ActionsType.RUN_SEQ}
}

export function failed (msg: string) {
  return { type: ActionsType.FAILED, payload:  msg}
}
