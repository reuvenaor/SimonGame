import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../utils/styles';
import UiText from '../uText/uText';

const UiButton = ({ onPress, title, style, disabled }) => {

  const disableStyle = disabled ? {backgroundColor: Colors.DARK} : null;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        st.btn, 
        style,
        disableStyle
      ]}
    >
      <UiText>{title}</UiText>
    </TouchableOpacity>
  );
}

const st = StyleSheet.create({
  btn: {
    width: 90,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UiButton;