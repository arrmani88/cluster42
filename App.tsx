import React, { useEffect } from 'react';
import LandingScreen from './src/screens/LandingScreen';
import CardScreen from './src/screens/CardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { selectThemeMode } from './src/redux/themeModeSlice';
import store from './src/redux/store';
import AppTheme from './src/constants/theme';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function AppWrapper() {
  return <Provider store={store}><App /></Provider>
}

function App(): JSX.Element {
  const theme = useSelector(selectThemeMode)

  useEffect(() => { console.log('theme=', theme) }, [theme])

  return (
    <NavigationContainer theme={theme === 'dark' ? AppTheme.darkTheme : AppTheme.lightTheme}>
      <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Landing'} component={LandingScreen} />
        <Stack.Screen name={'Card'} component={CardScreen} />
        <Stack.Screen name={'Profile'} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppWrapper;
