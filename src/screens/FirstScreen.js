import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Sizes } from '../utils/styles';
import Cone from '../components/cone/cone'

const FirstScreen = () => {

  return (
    <View style={[st.container]}>
      <Cone key={'0'} id={0} style={st.coneTop} />
      <Cone key={'1'} id={1} style={st.coneRight} />
      <Cone key={'2'} id={2} style={st.coneBottom} />
      <Cone key={'3'} id={3} style={st.coneLeft} />
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
    backgroundColor: Colors.BACKGROUND
  },
  coneTop: { transform: [{ translateY: -Sizes.CONE_GAP }] },
  coneRight: {
    transform: [{ translateX: Sizes.CONE_GAP }, { rotate: "90deg" },],
  },
  coneBottom: {
    transform: [{ rotate: "180deg" }, { translateY: -Sizes.CONE_GAP }],
  },
  coneLeft: {
    transform: [{ translateX: -Sizes.CONE_GAP }, { rotate: "270deg" }],
  }
});


export default FirstScreen;