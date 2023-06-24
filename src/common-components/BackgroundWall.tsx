import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { CustomTheme } from '../constants/theme';
import { useTheme } from '@react-navigation/native';
import LeftImage from '../images/left-42-logo.svg';
import RightImage from '../images/right-42-logo.svg';
import styles from './styles/BackgroundWall';
import { selectThemeMode } from '../redux/themeModeSlice';
import { useSelector } from 'react-redux';

interface Props {
  children: ReactNode;
}

const BackgroundWall = ({ children }: Props): JSX.Element => {
  const themeMode = useSelector(selectThemeMode)
  const theme = useTheme() as CustomTheme;
  const st = styles(theme)

  return (
    <>
      <StatusBar
        barStyle={themeMode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.statusBarBackground}
      />
      <SafeAreaView style={{ flex: 1, display: 'flex' }}>

        {/* <View style={{ flex: 1, display: 'flex' }}> */}
        <View style={st.imagesContainer}>
          <RightImage style={st.rightImage} />
          <LeftImage style={st.leftImage} />
        </View>
        {/* </View> */}

        {children}
      </SafeAreaView>
    </>
  );
};

export default BackgroundWall;
