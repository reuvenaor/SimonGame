import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Sizes } from '../../utils/styles';
import Cone from '../cone';

const Board = () => {

  return (
    <>
      {[st.coneTop, st.coneRight, st.coneBottom, st.coneLeft].map((i, idx) => {
        return <Cone key={''+ idx} id={idx} style={i} />
      })}
    </>
  );
}

const st = StyleSheet.create({
  coneTop: {
    transform: [{ translateY: -Sizes.CONE_GAP }],
    
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