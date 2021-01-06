import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '../utils/styles';

const ModalScreen = ({ navigation }) => {
  return (
    <View style={st.container}>

    </View>
  );
}

const st = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: Colors.BLACK,
    opacity: 0.8
  }
});


export default ModalScreen;