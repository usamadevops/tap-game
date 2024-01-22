import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircleComp() {
  const r = useSharedValue(20);

  const handlePress = () => {
    r.value += 100;
  };

  const Reset = () => {
    r.value -= 100;
  };
  const animatedProps = useAnimatedProps(() => ({
    r: withSpring(r.value),
  }));

setInterval(() => {
    if(r.value<100){
    handlePress();
    }
    else
    Reset();
}, 2000);


  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  svg: {
    height: '100%',
    width: '100%',
  },
});