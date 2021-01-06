import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '../utils/styles';
import Board from '../components/board';
import ScoreText from '../components/scoreText';
import Button from '../components/playButton';

const FirstScreen = () => {

  return (
    <View style={[st.container]}>
      <Button/>
      <Board />
      <ScoreText />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.BACKGROUND
  }
});


export default FirstScreen;