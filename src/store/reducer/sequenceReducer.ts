import ActionsType from '../types';

import { seqInit } from '../../utils/helpers';
import { ActionProp, State } from '../../utils/interfaces';

const initialState: State = {
  current: -1,
  gameSequence: seqInit(),
  isRuning: false,
  failmsg: '',
  userSequence: [],
  endGame: false,
  score: 0,
};


function rootReducer(state = initialState, action: ActionProp) {
  switch (action.type) {
    case ActionsType.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case ActionsType.SET_USER_SEQ:
      return {
        ...state,
        userSequence: [...state.userSequence, action.payload],
      };
    case ActionsType.SET_IS_RUN:
      return {
        ...state,
        isRuning: !state.isRuning
      };
    case ActionsType.NEW_GAME:
      return {
        ...state,
        score: state.score + 1,
        gameSequence: seqInit(state.score + 1),
        userSequence: [],
      };
    case ActionsType.FAILED:
      return {
        ...state,
        failmsg: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
