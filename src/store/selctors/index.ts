

import { GlobalState } from '../../utils/interfaces';

export const selectSeq = (state: GlobalState) => state.sequence.gameSequence;

export const selectCurrent = (state: GlobalState) => state.sequence.current;

export const selectUserSeq = (state: GlobalState) => state.sequence.userSequence;







