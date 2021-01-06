import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Colors, Sizes } from '../../utils/styles';
import { selectScore } from '../../store/selctors';
import { useSelector } from '../../store/react-redux';
import UiText from '../uText/uText';

const ScoreText = () => {

  const score = useSelector(selectScore);

  return (
    <UiText style={st.text}>{`Score: ${score}`}</UiText>
  );
}

const st = StyleSheet.create({
  text: {
    transform: [{ translateY: Sizes.SCORE_POS }],
    color: Colors.WHITE,
    fontSize: Sizes.FONT_17
  }
});

export default ScoreText;