import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import UiButton from '../uButton/index';
import { Sizes, Colors } from '../../utils/styles';
import { useDispatch, useSelector } from '../../store/react-redux';
import { runSequence } from '../../store/actions';
import { selectIsRuning } from '../../store/selctors'

const PlayButton = () => {

  const dispatch = useDispatch();
  const isRuning = useSelector(selectIsRuning);

  const onRun = () => {
    dispatch(runSequence());
  }

  return (
    <UiButton 
    onPress={onRun} 
    style={st.btn} 
    title={'START'} 
    disabled={isRuning}
    />
  );
}

const st = StyleSheet.create({
  btn: {
    transform: [{ translateY: -Sizes.SCORE_POS }],
    backgroundColor: Colors.WHITE,
  }
});


export default PlayButton;