import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Sizes } from '../../utils/styles';
import Cone from './cone';

const Board = () => {

  return (
    <>
      <Cone key={'0'} id={0} style={st.coneTop} />
      <Cone key={'1'} id={1} style={st.coneRight} />
      <Cone key={'2'} id={2} style={st.coneBottom} />
      <Cone key={'3'} id={3} style={st.coneLeft} />
    </>
  );
}

const st = StyleSheet.create({
  coneTop: { 
    transform: [{ translateY: -Sizes.CONE_GAP }] 
  },
  coneRight: {
    transform: [{ translateX: Sizes.CONE_GAP }, { rotate: "90deg" }]
  },
  coneBottom: {
    transform: [{ rotate: "180deg" }, { translateY: -Sizes.CONE_GAP }]
  },
  coneLeft: {
    transform: [{ translateX: -Sizes.CONE_GAP }, { rotate: "270deg" }]
  }
});


export default Board;