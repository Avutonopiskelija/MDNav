
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from './screens/DetailsScreen';
import MyAppbar from './components/MyAppbar';

const Stack = createNativeStackNavigator()

const App= () => {
  return (

    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={({navigation,route}) => ({
          header:(props) => <MyAppbar {...props} navigation={navigation} />,
        })}
        >
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            />
          <Stack.Screen 
            name="DetailsScreen" 
            component={DetailsScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App