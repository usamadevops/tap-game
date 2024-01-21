import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue,withSpring} from 'react-native-reanimated';

const Basic = () => {
  const translateX=useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
transform:[{translateY:withSpring(translateX.value*2)}]  }));
 
const handlePress = () => {
  translateX.value += 50;
};

  return (
    <View style={styles.flex}>
      <Animated.View style={[styles.container, animatedStyle]}/>

      <Button title='Click me' onPress={()=>handlePress()}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    backgroundColor:'#111f11',
    height:150,
    width:200,
    borderRadius:20
  }

});

export default Basic;
