
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from './screens/DetailsScreen';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title:'Home',
            headerTitle:'Home',
          }} />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{
            title:'Home',
            headerTitle:'Home',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}