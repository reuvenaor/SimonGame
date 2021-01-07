import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors, Sizes } from '../../utils/styles';
import UiText from '../uText';
import {ScoreProp} from '../../utils/interfaces'

const ScoreItem = ({ score, name }: ScoreProp) => {

  return (
    <View style={st.item}>
      <Text>
        <UiText style={[st.key]}>{'Name:  '}</UiText>
        <UiText style={[st.val]}>{name}</UiText>
      </Text>
      <Text>
        <UiText style={[st.key]}>{'Score:  '}</UiText>
        <UiText style={[st.val]}>{score}</UiText>
      </Text>
    </View>
  );
}

const st = StyleSheet.create({
  item: {
    width: Sizes.SCORE_ITEM_W,
    minHeight: Sizes.SCORE_ITEM_H,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  key: {
    color: Colors.WHITE,
    fontSize: Sizes.FONT_17,
  },
  val: {
    color: Colors.DARK,
    fontSize: Sizes.FONT_15
  }
});

export default ScoreItem;