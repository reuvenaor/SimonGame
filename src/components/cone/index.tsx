import React, { useState } from 'react';
import {
  StyleSheet,
  Pressable,
} from 'react-native';
import { Sizes, Colors } from '../../utils/styles';
import { useSelector, useDispatch } from '../../store/react-redux'
import { selectCurrent, selectIsRuning } from '../../store/selctors'
import { addUserSeq } from '../../store/actions'
import { Cons } from '../../utils/enums';
import Animated from 'react-native-reanimated';
import { interpolateColor, useTransition } from "react-native-redash";
import { ConeProp } from '../../utils/interfaces';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Cone = ({ style, id }: ConeProp) => {

  const dispatch = useDispatch();
  const current = useSelector(selectCurrent);
  const isRuning = useSelector(selectIsRuning);
  const conRef = React.useRef(null);
  const [anime, setAnime] = useState(false);

  const transition = useTransition(anime || id === current, { duration: 400 });

  const interColor = interpolateColor(transition, {
    inputRange: [0, 1],
    outputRange: [Cons[id], Colors.WHITE]
  });

  const onAddUserSeq = () => {
    setAnime(true);
    dispatch(addUserSeq(id))
    setTimeout(() => setAnime(false), 500);
  }

  return <AnimatedPressable
    ref={conRef}
    style={[st.cone,
      style,
    { borderTopColor: Cons[id], borderTopColor: interColor }
    ]}
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

export default Cone;