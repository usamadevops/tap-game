import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, List } from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16,backgroundColor:'#fff' }}>
      <List.Section>
        <List.Subheader>Beginner</List.Subheader>
        <List.Item title="Basic Animations" 
        right={() => <List.Icon color='#000' icon="folder" />} 
        />
        <List.Item
          title="Circle Animation"
          right={() => <List.Icon color={'#000'} icon="folder" />}
        />
      </List.Section>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: "Animations" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

export default App;
