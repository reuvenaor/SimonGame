import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import { Colors } from '../../utils/styles';

const UiTextInput = (props) => {

  return (
      <TextInput
        allowFontScaling={false}
        editable={props.editable ?? true}
        placeholder={props.placeholder}
        style={[stl.textInput, props.style]}
        numberOfLines={1}
        underlineColorAndroid={'transparent'}
        onChangeText={props.onChangeText}
        multiline={true}
        maxLength={30}
        value={props.value}
        blurOnSubmit={true}
        disableFullscreenUI={true}
      />
  );
}

const stl = StyleSheet.create({
  textInput: {
    width: '50%',
    marginHorizontal: '2%',
    borderRadius: 60,
    elevation: 2,
    paddingHorizontal: '5%',
    backgroundColor: Colors.LIGHT,
    marginVertical: '2%'
  },
});

export default UiTextInput;