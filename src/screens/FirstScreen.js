import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const FirstScreen = () => {

  return (
    <View style={[st.container]}>

    </View>
  );
}

const st = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    ...StyleSheet.AbsoluteFillStyle,
  },
});


export default FirstScreen;