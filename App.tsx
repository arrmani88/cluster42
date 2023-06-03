import React from 'react';
import LandingScreen from './src/screens/LandingScreen';
import CardScreen from './src/screens/CardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName='Card' screenOptions={{headerShown: false }}>
            <Stack.Screen name={'Landing'} component={LandingScreen} />
            <Stack.Screen name={'Card'} component={CardScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
