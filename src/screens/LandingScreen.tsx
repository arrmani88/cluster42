import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, StatusBar} from 'react-native';
import Logo42 from '../images/42-logo.svg';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {ScrollView, Text, useColorScheme, View} from 'react-native';
import {styles} from './styles/Landing';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../constants/theme';

const LandingScreen = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useTheme() as CustomTheme

  const style = styles(theme)

  useEffect(() => {
    const pauseCode = async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };
    pauseCode();
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={theme.colors.statusBarBackground} />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, display: 'flex'}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles(theme).scroller}
            contentContainerStyle={style.contentContainer}
          >
            <View style={style.logoWrapper}>
              <Logo42 style={styles(theme).logo} />
              {/* <Text style={style.clusterText}> CLUSTER </Text> */}
              <View style={{height: 200}} />
            </View>
            {isLoading ? (
              <>
                <View style={style.progressBarContainer}>
                  <ProgressBar styleAttr="Horizontal" color="#3D6670" />
                </View>
                <Text style={styles(theme).creditsText}>
                  {'Made in 1337 KH by:\nabouazi, anel-bou & aait-ihi'}
                </Text>
              </>
            ) : (
              <Pressable style={styles(theme).button}>
                <Text style={styles(theme).textButton}>SIGN IN WITH 42 INTRA</Text>
              </Pressable>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
