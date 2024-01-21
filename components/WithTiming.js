import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Animated, {
  useSharedValue,
  
  Easing,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const duration = 500;

export default function WithTimingComp() {
    const defaultAnim = useSharedValue(300);
    const linear = useSharedValue(300);
 
const animatedDefault=useAnimatedStyle(()=>({
    transform:[{translateY:defaultAnim.value}]
}));

const animatedChanged=useAnimatedStyle(()=>({
    transform:[{translateY:linear.value}]
}));

React.useEffect(() => {
  linear.value=withRepeat(
    withTiming(-linear.value,{
        duration,
        easing:Easing.linear
    }),-1,true
  );

  defaultAnim.value=withRepeat(
    withTiming(-defaultAnim.value,{
        duration,
    }),-1,true
  )
}, [])



  return (
    <View style={styles.container}>
    <Animated.View style={[styles.box, animatedDefault]}>
      <Text style={styles.text}>inout</Text>
    </Animated.View>
    <Animated.View style={[styles.box, animatedChanged]}>
      <Text style={styles.text}>linear</Text>
    </Animated.View>
  </View>

  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection:'row',
      justifyContent: 'center',
      height: '100%',
    },
    box: {
      height: 80,
      width: 80,
      margin: 20,
      borderWidth: 1,
      borderColor: '#b58df1',
      backgroundColor:'#111f11',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#b58df1',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  });
  