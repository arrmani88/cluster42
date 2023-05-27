import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Button, Dimensions, Pressable} from 'react-native';
import Logo42 from './src/images/42_logo.svg';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {percentage} from './src/utils/percentage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {padding} from './src/utils/padding';

type SectionProps = PropsWithChildren<{}>;

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const pauseCode = async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };
    pauseCode();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E5E5E5'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroller}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.logoWrapper}>
          <Logo42 style={styles.logo} />
          <Text style={styles.clusterText}> CLUSTER </Text>
          <View style={{height: 200}} />
        </View>
        {isLoading ? (
          <>
            <View style={styles.progressBarContainer}>
              <ProgressBar styleAttr="Horizontal" color="#3D6670" />
            </View>
            <Text style={styles.creditsText}>
              {'Made in 1337 KH by:\nabouazi, anel-bou & aait-ihi'}
            </Text>
          </>
        ) : (
          <Pressable style={styles.button}>
            <Text>SIGN IN WITH 42 INTRA</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#E5E5E5',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: percentage(60, ww),
    aspectRatio: 3 / 2,
    color: '#3D6670',
  },
  clusterText: {
    color: '#3D6670',
    fontWeight: '600',
    fontSize: 50,
    fontFamily: 'Futura BoldItalic',
    paddingRight: 10,
  },
  progressBarContainer: {
    width: ww,
    ...padding(0, percentage(20, ww)),
    position: 'absolute',
    bottom: percentage(40, ww),
  },
  creditsText: {
    position: 'absolute',
    color: '#3D6670',
    textAlign: 'center',
    fontSize: 13,
    bottom: percentage(20, ww),
  },
  button: {
    backgroundColor: '#3D6670',
    ...padding(10, 20),
    borderRadius: 10
  },
});

export default App;
