

import { GlobalState } from '../../utils/interfaces';

export const selectSeq = (state: GlobalState) => state.sequence.gameSequence;

export const selectCurrent = (state: GlobalState) => state.sequence.current;

export const selectUserSeq = (state: GlobalState) => state.sequence.userSequence;

export const selectIsRuning = (state: GlobalState) => state.sequence.isRuning;

export const selectScore = (state: GlobalState) => state.sequence.score;

export const selectEndGame = (state: GlobalState) => state.sequence.endGame;

export const selectScores = (state: GlobalState) => state.sequence.scores;










