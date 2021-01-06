import {Action} from 'redux'

export interface GlobalState {
  sequence: State
}

export interface State {
    current: number,
    gameSequence: Array<number>,
    failmsg: string,
    userSequence: Array<number>
    isRuning: boolean
    endGame: boolean,
    score: number
}

export interface ActionProp extends Action {
  type: string;
  payload?: any;
}

export interface ConeProp {
  style: any,
  id: number
}