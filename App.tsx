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

type RootStackParamList = {
  Home: undefined;
  animation: { item: React.ReactNode };
};

type AnimationScreenRouteProp = RouteProp<RootStackParamList, 'animation'>;

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <List.Section>
        <List.Subheader>Beginner</List.Subheader>
        <List.Item
          title="Basic Animations"
          onPress={() =>
            navigation.navigate('animation', { item: <Basic /> })
          }
        />
        <List.Item
          title="Circle Animation"
          onPress={() =>
            navigation.navigate('animation', { item: <WithTimingComp /> })
          }
        />
      </List.Section>
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
