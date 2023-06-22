import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {CustomTheme} from '../constants/theme';
import {useTheme} from '@react-navigation/native';
import LeftImage from '../images/left-42-logo.svg';
import RightImage from '../images/right-42-logo.svg';
import styles from './styles/BackgroundWall';

interface Props {
  children: ReactNode;
}

const BackgroundWall = ({children}: Props): JSX.Element => {
  const theme = useTheme() as CustomTheme;

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.statusBarBackground}
      />
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={{flex: 1, display: 'flex',}}> */}
        <View style={styles(theme).imagesContainer}>
          {/* tmpFix: need to import LeftImage instead */}
          <RightImage style={styles(theme).leftImage} />
          <RightImage style={styles(theme).rightImage} />
        </View>
        {children}
        {/* </View> */}
      </SafeAreaView>
    </>
  );
};

export default BackgroundWall;
