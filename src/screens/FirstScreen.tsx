import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Styles, Sizes } from '../utils/styles';
import Board from '../components/board';
import ScoreText from '../components/scoreText';
import Button from '../components/playButton';
import { useSelector } from '../store/react-redux'
import {selectEndGame} from '../store/selctors'
import { Screens } from '../utils/enums';
import {ScreenProp} from '../utils/interfaces'

const GameScreen = ({navigation}: ScreenProp) => {

  const endGame = useSelector(selectEndGame);

  useEffect(() => {
    if (endGame) {
      navigation.navigate(Screens.MODAL);
    }
  },[endGame])


  return (
    <View style={[Styles.container]}>
      <Button/>
      <Board />
      <ScoreText style={st.score}/>
    </View>
  );
}

const st = StyleSheet.create({
  score: {
    transform: [{ translateY: Sizes.SCORE_POS }],
  }
});


export default GameScreen;