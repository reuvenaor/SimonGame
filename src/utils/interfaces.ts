import {Action} from 'redux';
import {StyleProp, ViewStyle, TextStyle} from 'react-native'

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
    score: number,
    scores: Array<any> 
}

export interface ActionProp extends Action {
  type: string;
  payload?: any;
}

export interface ScreenProp {
  navigation: any
}

export interface UButtonProp {
  onPress: any, 
  title: string, 
  style?: StyleProp<ViewStyle>,
  disabled?: boolean, 
  fontStyle?: StyleProp<TextStyle>
}

export interface VStyleProp {
  style?: StyleProp<ViewStyle>
}

export interface ConeProp {
  style: StyleProp<ViewStyle>,
  id: number
}