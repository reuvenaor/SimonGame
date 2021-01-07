import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Colors, Sizes } from '../../utils/styles';
import { selectScore } from '../../store/selctors';
import { useSelector } from '../../store/react-redux';
import UiText from '../uText';
import {VStyleProp} from '../../utils/interfaces'


const ScoreText = ({style}: VStyleProp) => {

  const score = useSelector(selectScore);

  return (
    <UiText style={[st.text, style]}>{`SCORE: ${score}`}</UiText>
  );
}

const st = StyleSheet.create({
  text: {
    color: Colors.WHITE,
    fontSize: Sizes.FONT_17
  }
});

export default ScoreText;