import React, {StatusBar, View, SafeAreaView} from 'react-native';
import {styles} from './styles/Card';
import { CustomTheme } from '../constants/theme';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../redux/themeModeSlice';

const CardScreen = () => {
  const theme = useTheme() as CustomTheme
  const themeMode = useSelector(selectThemeMode)

  return (
    <>
      <StatusBar
        barStyle={themeMode !== 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.statusBarBackground}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, display: 'flex'}}>

        </View>
      </SafeAreaView>
    </>
  );
};

export default CardScreen;
