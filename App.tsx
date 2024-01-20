// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, StyleSheet, Alert,Text,View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const App = () => {
  const takeoverValue = useSharedValue(0.5);

  const handleTopTap = () => {
    takeoverValue.value += 0.05;

    if (takeoverValue.value >= 0.95) {
      Alert.alert('Game Over', 'Red wins!');
      takeoverValue.value = 0.5; // Reset for the next game.
    }
  };

  const handleBottomTap = () => {
    takeoverValue.value -= 0.05;

    if (takeoverValue.value <= 0.1) {
      Alert.alert('Game Over', 'Blue wins!');
      takeoverValue.value = 0.5; // Reset for the next game.
    }
  };
  const topStyle = useAnimatedStyle(() => {
    return {
      flex: takeoverValue.value,
      backgroundColor: '#FF3636',
      borderBottomLeftRadius:180,
      borderRadius:0,
      borderBottomRightRadius:180,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -41 },
        shadowOpacity: 0.25,
        shadowRadius: 78,
        elevation: 5, // This is for Android; adjust as necessary
  
    

    };
  });

  const bottomStyle = useAnimatedStyle(() => {
    return {
      flex: 1 - takeoverValue.value,
      backgroundColor: '#3687FF',
      borderTopLeftRadius:180,
      borderRadius:0,
      borderTopRightRadius:180,
    };
  });
  return (
    <>
    <View style={{ flex: 1, position: 'absolute', alignItems: 'center', justifyContent: "center" }}>
      <Text style={{ fontFamily: "Game", fontSize: 32, backgroundColor: "transparent", textAlign: 'center', color: "#fff" }}>Tap Game</Text>
    </View>

    <Animated.View style={[styles.full, topStyle]}>
      <TouchableOpacity style={styles.full} activeOpacity={1} onPress={handleTopTap}>
        <View style={[styles.eye, styles.left1Eye]}></View>
        <View style={[styles.eye, styles.right1Eye]}></View>
      </TouchableOpacity>
    </Animated.View>

    <Animated.View style={[styles.full, bottomStyle]}>
      <TouchableOpacity style={styles.full} activeOpacity={1} onPress={handleBottomTap}>
        <View style={[styles.eye, styles.left2Eye]}></View>
        <View style={[styles.eye, styles.right2Eye]}></View>
      </TouchableOpacity>
    </Animated.View>
  </>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,    
  },
  eye: {
    width: 30, // Adjust size as needed
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15, // Half of the width/height to make it circular
    position: 'absolute',
    borderColor: 'black',
  },
  left1Eye: {
    left: '25%', // Adjust as needed for positioning
    top: '75%',  // Adjust as needed for positioning
  },
  right1Eye: {
    right: '25%', // Adjust as needed for positioning
    top: '75%',  // Adjust as needed for positioning
  }, 
  left2Eye: {
    left: '25%', // Adjust as needed for positioning
    top: '25%',  // Adjust as needed for positioning
  },
  right2Eye: {
    right: '25%', // Adjust as needed for positioning
    top: '25%',  // Adjust as needed for positioning
  }
});

export default App;
