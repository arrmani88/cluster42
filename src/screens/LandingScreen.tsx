import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, StatusBar} from 'react-native';
import Logo42 from '../images/42-logo.svg';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {ScrollView, Text, useColorScheme, View} from 'react-native';
import {styles} from './styles/Landing';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../constants/theme';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../redux/themeModeSlice';

const LandingScreen = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useTheme() as CustomTheme
  const themeMode = useSelector(selectThemeMode)

  const st = styles(theme)

  useEffect(() => {
    const pauseCode = async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };
    pauseCode();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={themeMode !== 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.statusBarBackground}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, display: 'flex'}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={st.scroller}
            contentContainerStyle={st.contentContainer}
          >
            <View style={st.logoWrapper}>
              <Logo42 style={st.logo} />
              {/* <Text style={st.clusterText}> CLUSTER </Text> */}
              <View style={{height: 200}} />
            </View>
            {isLoading ? (
              <>
                <View style={st.progressBarContainer}>
                  <ProgressBar styleAttr="Horizontal" color="#3D6670" />
                </View>
                <Text style={st.creditsText}>
                  {'Made in 1337 KH by:\nabouazi, anel-bou & aait-ihi'}
                </Text>
              </>
            ) : (
              <Pressable style={st.button}>
                <Text style={st.textButton}>SIGN IN WITH 42 INTRA</Text>
              </Pressable>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
