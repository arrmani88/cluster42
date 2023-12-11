import React, { useCallback, useEffect } from 'react';
import LandingScreen from './src/screens/LandingScreen';
import CardScreen from './src/screens/CardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { selectThemeMode } from './src/redux/themeModeSlice';
import store from './src/redux/store';
import AppTheme from './src/constants/theme';
import ProfileScreen from './src/screens/ProfileScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

function AppWrapper() {
  return <Provider store={store}><App /></Provider>
}

function App(): JSX.Element {
  const themeMode = useSelector(selectThemeMode)
  
  const [fontsLoaded] = useFonts({
    'Consola-Regular': require('./assets/fonts/Consola-Regular.ttf'),
    'Consola-Bold': require('./assets/fonts/Consola-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null as any

  return (
    // <View onLayout={onLayoutRootView}>
      <NavigationContainer theme={themeMode === 'dark' ? AppTheme.darkTheme : AppTheme.lightTheme}>
      <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Landing'} component={LandingScreen} />
        <Stack.Screen name={'Card'} component={CardScreen} />
        <Stack.Screen name={'Profile'} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  )
}

export default AppWrapper;
