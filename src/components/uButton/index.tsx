import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../utils/styles';
import UiText from '../uText';
import {UButtonProp} from '../../utils/interfaces';

const UiButton = ({ onPress, title, style, disabled, fontStyle }: UButtonProp) => {

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
      <UiText style={fontStyle}>{title}</UiText>
    </TouchableOpacity>
  );
}

const st = StyleSheet.create({
  btn: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,

  }
});

export default UiButton;