import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ScoreText from '../components/scoreText';
import UiButton from '../components/uButton';
import UiTextInput from '../components/uTextInput';
import { Screens } from '../utils/enums';
import { Colors, Styles } from '../utils/styles';
import { useDispatch } from '../store/react-redux';
import { storeScore } from '../store/actions';
import { ScreenProp } from '../utils/interfaces'

const ModalScreen = ({ navigation }: ScreenProp) => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onNav = () => {
    dispatch(storeScore(name));
    navigation.navigate(Screens.SECOND_SCREEN);
  }
  const onChangeText = (val: string) => {
    setName(val);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <View style={st.card}>
          <ScoreText />
          <UiTextInput
            title={'Enter your Name:'}
            onChangeText={onChangeText}
            value={name}
            placeholder={'Your name'} />
          <UiButton disabled={false} onPress={onNav} title={'SCORE BOARD'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const st = StyleSheet.create({
  card: {
    width: '90%',
    height: '50%',
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    borderColor: Colors.WHITE,
    borderWidth: 2
  }
});


export default ModalScreen;