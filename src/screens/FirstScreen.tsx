import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '../utils/styles';
import { useDispatch } from '../store/react-redux';
import Board from '../components/board';
import { runSequence } from '../store/actions';

const FirstScreen = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(runSequence())
  }, [])

  return (
    <View style={[st.container]}>
      <Board />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    ...StyleSheet.AbsoluteFillStyle,
    backgroundColor: Colors.BACKGROUND
  }
});


export default FirstScreen;