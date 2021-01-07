import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Sizes, Styles } from '../utils/styles';
import Button from '../components/uButton';
import ScoreList from '../components/scoreList';
import { ScreenProp } from '../utils/interfaces'

const ScoreBoardScreen = ({ navigation }: ScreenProp) => {

  const onBack = () => {
    navigation.goBack();
  }

  return (
    <View style={[Styles.container, st.container]}>
      <Button
        style={st.btn}
        fontStyle={st.btnTxt}
        title={'\u2190'}
        onPress={onBack}
        disabled={false}
      />
      <ScoreList />
    </View>
  );

}

const st = StyleSheet.create({
  container: {
    paddingVertical: Sizes.SCROLL_PAD,
  },
  btn: {
    position: 'absolute',
    top: -10,
    flex: 2,
    left: '2%',
    backgroundColor: 'transparent',
  },
  btnTxt: {
    fontSize: Sizes.ARROW,
    color: Colors.DARK
  }
});


export default ScoreBoardScreen;