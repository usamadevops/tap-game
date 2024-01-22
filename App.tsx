import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  RouteProp,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, List } from 'react-native-paper';
import Basic from './components/Basic';
import WithTimingComp from './components/WithTiming';
import { animationsByLevel, list } from './components/AnimationList';

type RootStackParamList = {
  Home: undefined;
  animation: { item: React.ReactNode };
};

type AnimationScreenRouteProp = RouteProp<RootStackParamList, 'animation'>;

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {animationsByLevel.map((level, index) => (
        <List.Section key={index}>
          <List.Subheader>{level.label}</List.Subheader>
          {level.animations.map((animation, animIndex) => (
            <List.Item
              key={animIndex}
              title={animation.name}
              onPress={() =>
                navigation.navigate('animation', { item: animation.component })
              }
            />
          ))}
        </List.Section>
      ))}
    </View>
  );
}

function Animation({ route }: { route: AnimationScreenRouteProp }) {
  const { item } = route.params || { item: null };

  return <View style={{ flex: 1, backgroundColor: '#fff' }}>{item}</View>;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: 'Animations' }}
          />
          <Stack.Screen name="animation" component={Animation} options={{headerTitle:''}} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
