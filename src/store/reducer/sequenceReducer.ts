import ActionsType from '../types';

import { Sequence } from '../../utils/models';
import {ActionProp, State} from '../../utils/interfaces';
const Seq = new Sequence();

const seq = [...Seq.seqInit()];

const initialState: State = {
  current: -1,
  gameSequence: seq,
  failmsg: '',
  userSequence: []
};


function rootReducer(state = initialState, action: ActionProp) {
  switch (action.type) {
    case ActionsType.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case ActionsType.ADD_USER_SEQ:
      return {
        ...state,
        userSequence: [...state.userSequence, action.payload],
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
