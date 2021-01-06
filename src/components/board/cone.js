import React from 'react';
import {
  StyleSheet,
  Pressable,
} from 'react-native';
import { Sizes } from '../../utils/styles';
import { useSelector, useDispatch } from '../../store/react-redux'
import { selectCurrent, selectIsRuning } from '../../store/selctors'
import { addUserSeq } from '../../store/actions'
import * as Animatable from 'react-native-animatable';
import { opacity } from './animation';
import { Cons, Screens } from '../../utils/enums';
import { useNavigation } from '@react-navigation/native';


const AnimatedPressable = Animatable.createAnimatableComponent(Pressable);

export default Cone = ({ style, id, disabled }) => {

  const dispatch = useDispatch();
  const current = useSelector(selectCurrent);
  const isRuning = useSelector(selectIsRuning);
  const conRef = React.useRef(null);
  const navigator = useNavigation();
  

  const onAddUserSeq = () => {
    navigator.navigate(Screens.MODAL)
    if (conRef.current) {
      conRef.current.animate(opacity);
    }
    dispatch(addUserSeq(id))
  }

  React.useEffect(() => {
    if (current === id) {
      conRef.current.animate(opacity);
    }
  }, [current])


  return <AnimatedPressable
    ref={conRef}
    style={[st.cone, { borderTopColor: Cons[id] }, style]}
    onPress={onAddUserSeq}
    disabled={isRuning}
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