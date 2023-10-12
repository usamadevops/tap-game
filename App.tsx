import "react-native-gesture-handler";
import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const App = () => {
  const takeoverValue = useSharedValue(0.5);

  const handleTopTap = () => {
    takeoverValue.value += 0.05;

    if (takeoverValue.value >= 0.95) {
      Alert.alert('Game Over', 'Blue wins!');
      takeoverValue.value = 0.5; // Reset for the next game.
    }
  };

  const handleBottomTap = () => {
    takeoverValue.value -= 0.05;

    if (takeoverValue.value <= 0.1) {
      Alert.alert('Game Over', 'Red wins!');
      takeoverValue.value = 0.5; // Reset for the next game.
    }
  };

  const topStyle = useAnimatedStyle(() => {
    return {
      flex: takeoverValue.value,
      backgroundColor: 'blue'
    };
  });

  const bottomStyle = useAnimatedStyle(() => {
    return {
      flex: 1 - takeoverValue.value,
      backgroundColor: 'red'
    };
  });

  return (
    <>
      <Animated.View style={[styles.full, topStyle]}>
        <TouchableOpacity style={styles.full} activeOpacity={1} onPress={handleTopTap} />
      </Animated.View>
      <Animated.View style={[styles.full, bottomStyle]}>
        <TouchableOpacity style={styles.full} activeOpacity={1} onPress={handleBottomTap} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

export default App;
