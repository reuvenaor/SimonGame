import React from 'react';
import {
  StyleSheet,
  Pressable,
} from 'react-native';
import { Sizes } from '../../utils/styles';
import { useSelector, useDispatch } from '../../store/react-redux'
import { selectCurrent } from '../../store/selctors'
import { addUersSeqNum } from '../../store/actions'
import * as Animatable from 'react-native-animatable';
import { opacity } from './animation';
import { Cons } from '../../utils/enums'

const AnimatedPressable = Animatable.createAnimatableComponent(Pressable);

export default Cone = ({ style, id }) => {

  const dispatch = useDispatch();
  const current = useSelector(selectCurrent);
  const conRef = React.useRef(null);

  const onAddUserSeq = () => {
    if (conRef.current) {
      conRef.current.animate(opacity);
    }
    dispatch(addUersSeqNum(id))
  }

  React.useEffect(() => {
    if (current === id) {
      console.log('id:', id, 'current:', current);
      conRef.current.animate(opacity);
    }
  }, [current])


  return <AnimatedPressable
    ref={conRef}
    style={[st.cone, { borderTopColor: Cons[id] }, style]}
    onPress={onAddUserSeq}
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