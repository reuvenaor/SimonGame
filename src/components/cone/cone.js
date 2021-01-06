import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Pressable,
} from 'react-native';
import { Sizes } from '../../utils/styles';
import { Cons } from '../../utils/enums'

export default Cone = ({ style, id }) => {

  return <Pressable
    style={[st.cone, style, { borderTopColor: Cons[id] }]}
  />
};

const st = StyleSheet.create({
  cone: {
    width: 0,
    height: 0,
    borderLeftWidth: Sizes.CONE_BORDER,
    borderLeftColor: "transparent",
    borderRightWidth: Sizes.CONE_BORDER,
    borderRightColor: "transparent",
    borderTopWidth: Sizes.CONE_BORDER,
    borderRadius: 200,
    position: 'absolute'
  },
});